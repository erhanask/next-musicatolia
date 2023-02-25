import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import {ExpandMoreSharp} from "@mui/icons-material";
import {useState} from "react";


const GuidePage = () => {

    const [expanded, setExpanded] = useState(false);

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

// <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
//     <AccordionSummary
//         expandIcon={<ExpandMoreSharp/>}
//         aria-controls="panel1bh-content"
//         id="panel1bh-header"
//     >
//         <Typography sx={{width: '33%', flexShrink: 0}}>
//             General settings
//         </Typography>
{/*        <Typography sx={{color: 'text.secondary'}}>I am an accordion</Typography>*/
}
//     </AccordionSummary>
//     <AccordionDetails>
{/*        <Typography>*/
}
{/*            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.*/
}
//             Aliquam eget maximus est, id dignissim quam.
{/*        </Typography>*/
}
{/*    </AccordionDetails>*/
}
{/*</Accordion>*/
}
{/*<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>*/
}
{/*    <AccordionSummary*/
}
{/*        expandIcon={<ExpandMoreSharp/>}*/
}
{/*        aria-controls="panel2bh-content"*/
}
{/*        id="panel2bh-header"*/
}
{/*    >*/
}
{/*        <Typography sx={{width: '33%', flexShrink: 0}}>Users</Typography>*/
}
{/*        <Typography sx={{color: 'text.secondary'}}>*/
}
{/*            You are currently not an owner*/
}
{/*        </Typography>*/
}
{/*    </AccordionSummary>*/
}
{/*    <AccordionDetails>*/
}
{/*        <Typography>*/
}
{/*            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,*/
}
{/*            varius pulvinar diam eros in elit. Pellentesque convallis laoreet*/
}
{/*            laoreet.*/
}
{/*        </Typography>*/
}
{/*    </AccordionDetails>*/
}
{/*</Accordion>*/
}
{/*<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>*/
}
{/*    <AccordionSummary*/
}
{/*        expandIcon={<ExpandMoreSharp/>}*/
}
{/*        aria-controls="panel3bh-content"*/
}
{/*        id="panel3bh-header"*/
}
{/*    >*/
}
{/*        <Typography sx={{width: '33%', flexShrink: 0}}>*/
}
{/*            Advanced settings*/
}
{/*        </Typography>*/
}
{/*        <Typography sx={{color: 'text.secondary'}}>*/
}
{/*            Filtering has been entirely disabled for whole web server*/
}
{/*        </Typography>*/
}
{/*    </AccordionSummary>*/
}
{/*    <AccordionDetails>*/
}
{/*        <Typography>*/
}
{/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/
}
{/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/
}
{/*        </Typography>*/
}
{/*    </AccordionDetails>*/
}
{/*</Accordion>*/
}
{/*<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>*/
}
{/*    <AccordionSummary*/
}
{/*        expandIcon={<ExpandMoreSharp/>}*/
}
{/*        aria-controls="panel4bh-content"*/
}
{/*        id="panel4bh-header"*/
}
{/*    >*/
}
{/*        <Typography sx={{width: '33%', flexShrink: 0}}>Personal data</Typography>*/
}
{/*    </AccordionSummary>*/
}
{/*    <AccordionDetails>*/
}
{/*        <Typography>*/
}
{/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/
}
{/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/
}
{/*        </Typography>*/
}
{/*    </AccordionDetails>*/
}
{/*</Accordion>*/
}