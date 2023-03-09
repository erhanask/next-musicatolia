import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {ExpandMoreSharp} from "@mui/icons-material";
import {useEffect, useState} from "react";
import { db} from "../../config";
import { collection, getDocs } from "firebase/firestore";

const GuidePage = () => {

    const [expanded, setExpanded] = useState(false);
    const [guides, setGuides] = useState([]);


    useEffect(() => {
        const getLog = async () => {
            const querySnapshot = await getDocs(collection(db, "guides"));
            querySnapshot.forEach((doc) => {
                let guideList = [...guides];
                guideList = [...guideList, { id: doc.id, data: doc.data() }];
                setGuides(guideList);
            });
        };

        getLog();

    },[]);



    const handleChange =
        (panel) => (isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    const guideItems = {
        items: {
            contents: [
                {
                    header: 'What is the purpose of the application?',
                    summary: 'beep boop',
                    content: 'The purpose of the application is to provide a platform for users to discover new music and artists. The application includes my favourite tracks and advices.'
                },
                {
                    header: 'beep boop',
                    summary: 'beep boop',
                    content: 'beep boop'
                },
                {
                    header: 'boop beep',
                    summary: 'beep boop',
                    content: 'boop beep'
                },
            ]
        }
    }

    const listGuideItems = () => {
        return guideItems.items.contents.map((item, i) => {
            return (
                <Accordion key={i} sx={{
                    marginBlock: '20px',
                    border: '1px solid #E0E0E0',
                    boxShadow: 'none',
                    backgroundColor: '#a3f2a3'
                }} expanded={expanded === i} onChange={handleChange(i)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreSharp/>}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography variant={'p'} sx={{
                            width: '33%', flexShrink: 0}}>
                            {item.header}
                        </Typography>
                        <Typography variant={'p'} sx={{color: 'text.secondary'}}>
                            {item.summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant={'p'}>
                            {item.content}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })
    };

    return (<Box sx={{
        width: '100%',
        paddingInline: '10px',
    }}>
        {listGuideItems()}
    </Box>);
}

export default GuidePage;