import {useAuthContext} from "../../context/AuthContext";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {Input, InputLabel, TextField, Typography} from "@mui/material";


const SettingsPage = () => {

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        // if (user == null) router.push("/")
    }, [user])

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            'email': e.target[0].value,
            'password': e.target[1].value
        }

        // TODO : AuthContext will be changed to a global context

    }


    return user == null ? (
        <>
            <form style={{
                display: 'flex',
                width: '30%',
                justifyContent: 'center',
                alignIItems: 'center',
                height: '100%',
                flexDirection: 'column',
                marginInline: 'auto'
            }} onSubmit={handleSubmit}>
                <Typography
                    variant={`p`}
                >
                    Enter Credentials To View Settings
                </Typography>
                <Input
                    name={`email`}
                    placeholder={`Email`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`password`}
                    placeholder={`Password`}
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
                }} type={`submit`} value={`Login`}/>
            </form>
        </>
    ) : 'yihuuu';
}

export default SettingsPage;