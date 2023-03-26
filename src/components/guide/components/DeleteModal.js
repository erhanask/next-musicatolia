import {Box, Button, Modal, Typography} from "@mui/material";
import { doc, deleteDoc } from "firebase/firestore";
import {db} from "../../../config";


const DeleteModal = ({open, selectedId, setUpdate}) => {

    const handleClose = () => open.setOpen(false);
    const handleDelete = async () => {
        await deleteDoc(doc(db, "guides", selectedId));
        handleClose();
        setUpdate(true);
    }

    return (
        <Modal
            open={open.condition}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Box sx={{
                    width: {sm:'350px', xs:'100%'},
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    padding: {sm:'.75rem', xs: '.5rem'}

                }}>
                    <Typography
                        sx={{
                            color: 'error.main',
                            borderBottom: '1px solid #EFEFEF',
                            paddingBottom: '10px'
                        }}
                        variant={'h5'}
                        id="parent-modal-title">Do you really want to delete this record permanently?</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '1rem'
                        }}
                        id="parent-modal-description">
                        <Button variant={`contained`} color={`primary`} onClick={handleClose}>No</Button>
                        <Button variant={`contained`} color={`error`} onClick={() => handleDelete()}>Yes</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}


export default DeleteModal;