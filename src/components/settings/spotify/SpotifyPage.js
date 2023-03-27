import {useAuthContext} from "../../../context/AuthContext";
import AuthForm from "../components/AuthForm";
import {Box, CircularProgress, Input, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../config";

// TODO : spotify setting forms will be listed in here.
const SpotifyPage = () => {

    const {user} = useAuthContext();
    const [inputValues, setInputValues] = useState();
    const formStyle = {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        flexFlow: 'wrap',
        marginInline: 'auto',
        paddingInline: '10px',
        marginBlock: '15px'
    };

    const handleSubmit = async () => {
        await console.log('aaa');
    };

    const getSpotifyValues = async () => {
        const querySnapshot = await getDocs(collection(db, "spotify"));
        return querySnapshot?.docs[0]?.data();
    };

    useEffect(() => {
        getSpotifyValues().then(r => setInputValues(r.api_urls));
    }, []);

    if (inputValues !== undefined) {
    return user == null ? <AuthForm/> :
        (
            <>
                <Box sx={{padding: '15px'}}>
                    <Typography
                        variant={`h4`}
                        sx={{
                            paddingInline: '10px'
                        }}
                    >
                        Enter Flyings Contents
                    </Typography>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <input style={{
                            width: '25%',
                            border: '1px solid #aeaeae',
                            lineHeight: '25px',
                            backgroundColor: '#27ae60',
                            color: 'white',
                            marginTop: '10px'
                        }} type={`submit`} value={`Edit`}/>
                    </form>
                </Box>
                <Box sx={{padding: '15px'}}>
                    <Typography
                        variant={`h4`}
                        sx={{
                            paddingInline: '10px'
                        }}
                    >
                        Enter Runnings Contents
                    </Typography>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <Box sx={{
                            width: '50%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '90%'
                                }}
                            />
                        </Box>
                        <input style={{
                            width: '25%',
                            border: '1px solid #aeaeae',
                            lineHeight: '25px',
                            backgroundColor: '#27ae60',
                            color: 'white',
                            marginTop: '10px'
                        }} type={`submit`} value={`Edit`}/>
                    </form>
                </Box>
                <Box sx={{padding: '15px'}}>
                    <Typography
                        variant={`h4`}
                        sx={{
                            paddingInline: '10px'
                        }}
                    >
                        Enter Embed Code Link
                    </Typography>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <Box sx={{
                            width: '100%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                value={inputValues.embed_url}
                                sx={{
                                    width: '95%'
                                }}
                            />
                        </Box>
                        <input style={{
                            width: '25%',
                            border: '1px solid #aeaeae',
                            lineHeight: '25px',
                            backgroundColor: '#27ae60',
                            color: 'white',
                            marginTop: '10px'
                        }} type={`submit`} value={`Edit`}/>
                    </form>
                </Box>
                <Box sx={{padding: '15px'}}>
                    <Typography
                        variant={`h4`}
                        sx={{
                            paddingInline: '10px'
                        }}
                    >
                        Enter Favs Profile Link
                    </Typography>
                    <form style={formStyle} onSubmit={handleSubmit}>
                        <Box sx={{
                            width: '100%'
                        }}>
                            <Input
                                name={`header`}
                                type={`text`}
                                placeholder={`Header`}
                                required
                                sx={{
                                    width: '95%'
                                }}
                            />
                        </Box>
                        <input style={{
                            width: '25%',
                            border: '1px solid #aeaeae',
                            lineHeight: '25px',
                            backgroundColor: '#27ae60',
                            color: 'white',
                            marginTop: '10px'
                        }} type={`submit`} value={`Edit`}/>
                    </form>
                </Box>
            </>
        );
    } else {
        return <CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>
    }
}

export default SpotifyPage;