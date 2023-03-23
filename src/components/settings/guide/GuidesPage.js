import {useAuthContext} from "../../../context/AuthContext";
import {Box, Input, Typography} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import AuthForm from "../components/AuthForm";
import GuidePage from "../../guide";
import {db} from "../../../config";
import {useEffect, useState} from "react";


const GuidesPage = () => {

    const {user} = useAuthContext();
    const [guideUpdate,setGuideUpdate] = useState(false);
    const [guidePage, setGuidePage] = useState(undefined);

    useEffect(() => {
        setGuidePage(<GuidePage/>);
    },[guideUpdate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            'header': e.target[0].value,
            'content': e.target[1].value,
            'summary' : e.target[2].value
        }


        if (data.header !== null && data.content !== null && data.summary !== null) {
            // Add a new document with a generated id.
            const docRef = await addDoc(collection(db, "guides"), data);
            console.log("Document written with ID: ", docRef.id);
            setGuideUpdate(true);
        }


    }

    return user == null ? <AuthForm/> :
        <Box sx={{padding:'15px'}}>
            <Typography
                variant={`h3`}
                sx={{
                    paddingInline: '10px'
                }}
            >
                Enter Guides Contents
            </Typography>
            <form style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: 'column',
                flexWrap: 'wrap',
                marginInline: 'auto',
                paddingInline: '10px'
            }} onSubmit={handleSubmit}>
                <Input
                    name={`header`}
                    type={`textarea`}
                    placeholder={`Header`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`content`}
                    type={`textarea`}
                    placeholder={`Content`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`summary`}
                    type={`textarea`}
                    placeholder={`Summary`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <input style={{
                    width: '25%',
                    border: '1px solid #aeaeae',
                    lineHeight: '25px',
                    backgroundColor: '#27ae60',
                    color: 'white',
                    marginTop: '10px'
                }} type={`submit`} value={`Add - Update`}/>
            </form>
            <Box marginTop={'1rem'}>
                {guidePage}
            </Box>
        </Box>;
}

export default GuidesPage;