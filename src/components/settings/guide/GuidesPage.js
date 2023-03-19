import {useAuthContext} from "../../../context/AuthContext";
import {Box, Input, Typography} from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import AuthForm from "../components/AuthForm";
import GuidePage from "../../guide";
import {db} from "../../../config";


const GuidesPage = () => {

    const {user,setUser} = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            'email': e.target[0].value,
            'password': e.target[1].value
        }


        if (data.email === process.env.adminEmail && data.password === process.env.adminPassword) {
            // const cityRef = doc(db, 'cities', 'BJ');
            // setDoc(cityRef, { capital: true }, { merge: true });
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
                <GuidePage />
            </Box>
        </Box>;
}

export default GuidesPage;