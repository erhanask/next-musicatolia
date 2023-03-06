import {useAuthContext} from "../../../context/AuthContext";
import {Input, Typography} from "@mui/material";


const AuthForm = () => {

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

        console.log(process.env.adminEmail);

        console.log(btoa(data.email+'hashed'+data.password+data.email));
    }

    return (
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
                    type={`text`}
                    placeholder={`Email`}
                    required
                    sx={{
                        marginBlock: '15px'
                    }}
                />
                <Input
                    name={`password`}
                    type={`password`}
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
    );
}

export default AuthForm;