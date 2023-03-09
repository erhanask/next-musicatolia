import {useAuthContext} from "../../../context/AuthContext";
import {useRouter} from "next/navigation";
import {Box, Grid, Input, InputLabel, TextField, Typography} from "@mui/material";
import Link from "next/link";
import AuthForm from "../components/AuthForm";


const GuidesPage = () => {

    const {user,setUser} = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            'email': e.target[0].value,
            'password': e.target[1].value
        }


        if (data.email === process.env.adminEmail && data.password === process.env.adminPassword) {
            localStorage.setItem('auth_key', btoa(data.email+data.password));
            setUser(data);
        }


    }

    return user == null ? <AuthForm/> :
        <Box sx={{padding:'15px'}}>
            <Typography
                variant={`h3`}
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
            }} onSubmit={handleSubmit}>
                <Input
                    name={`question`}
                    type={`textarea`}
                    placeholder={`Question`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`answer`}
                    type={`textarea`}
                    placeholder={`Answer`}
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
                }} type={`submit`} value={`Add`}/>
            </form>
            <Box>

            </Box>
        </Box>;
}

export default GuidesPage;