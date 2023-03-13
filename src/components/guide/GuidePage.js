import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {ExpandMoreSharp} from "@mui/icons-material";
import {useEffect, useState} from "react";
import { db} from "../../config";
import { collection, getDocs } from "firebase/firestore";

const GuidePage = () => {

    const [expanded, setExpanded] = useState(false);
    const [guides, setGuides] = useState([]);


    useEffect(() => {
        const getGuides = async () => {
            const querySnapshot = await getDocs(collection(db, "guides"));
            querySnapshot.forEach((doc) => {
                let guideList = [...guides];
                guideList = [...guideList, { id: doc.id, data: doc.data() }];
                setGuides(guideList);
            });
        };

        getGuides();

    },[]);



    const handleChange =
        (panel) => (isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    const guideItems = {
        items: {
            contents: guides
        }
    }

    const listGuideItems = () => {
        return guideItems.items.contents.map(({data}, i) => {
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
                            {data.header}
                        </Typography>
                        <Typography variant={'p'} sx={{color: 'text.secondary'}}>
                            {data.summary}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant={'p'}>
                            {data.content}
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