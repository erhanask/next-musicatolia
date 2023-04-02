import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {Close, ExpandMoreSharp} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {db} from "../../config";
import {collection, getDocs} from "firebase/firestore";
import DeleteModal from "./components/DeleteModal";

const GuidePage = React.memo(({included, updated, setUpdate}) => {

    const [expanded, setExpanded] = useState(false);
    const [guides, setGuides] = useState([]);
    const [docId, setDocId] = useState(undefined);
    const [open, setOpen] = useState(false);

    const openDeleteModal = (id) => {
        setDocId(id);
        setOpen(true);
        return console.log('guide id =' + id);
    }
    const getGuides = async () => {
        let guideList = [];
        const querySnapshot = await getDocs(collection(db, "guides"));
        querySnapshot.forEach((doc) => {
            guideList = [...guideList, {id: doc.id, data: doc.data()}];
            setGuides(guideList);
        });
    };

    useEffect(() => {
        getGuides();
        if (typeof updated !== 'undefined') {
            setUpdate(false);
        }
    }, [updated]);


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
        return guideItems.items.contents.map(({id, data}, i) => {
            return (
                <Accordion key={id} sx={{
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
                            width: '33%',
                            flexShrink: 0,
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            <Close sx={{
                                color: 'red',
                                cursor: 'not-allowed'
                            }}
                                   onClick={() => openDeleteModal(id)}
                            />
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

    return (
        <>
            <Box sx={{
                width: '100%',
                paddingInline: '10px',
            }}>
                {listGuideItems()}
            </Box>
            <DeleteModal open={{condition: open, setOpen: setOpen}} selectedId={docId} setUpdate={setUpdate}/>
        </>
    );
});

export default GuidePage;