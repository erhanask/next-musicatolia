import {useAuthContext} from "../../../context/AuthContext";
import AuthForm from "../components/AuthForm";
import {Alert, Box, CircularProgress, Input, Snackbar, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {updateDoc, collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../../config";

// TODO : spotify setting forms will be listed in here.
const SpotifyPage = () => {

    const {user} = useAuthContext();
    const [inputValues, setInputValues] = useState();
    const [formId, setFormId] = useState();
    const [openSnack, setOpenSnack] = useState(false);

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

    // There are just 4 types data in this form.
    // 1. flyings_urls
    // 2. runnings_urls
    // 3. embed_url
    // 4. fav_user_url
    // So data processes will be done according to this.
    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());


        // checking key of data (flyings_urls, runnings_urls, embed_url, fav_user_url)
        const inputKey = Object.keys(data)[0];
        const values = Object.values(data);
        const newValues = inputValues;


        // I will edit according to this.
        Object.entries(inputValues).forEach(([key, value], index) => {
            if (key === 'embed_url' && inputKey.includes('embed') || key === 'fav_user_url' && inputKey.includes('fav_user')) {
                newValues[key] = values[0];
                setInputValues(newValues);
            }
            if (key === 'flyings_urls' && inputKey.includes('flyings') || key === 'runnings_urls' && inputKey.includes('runnings')) {
                newValues[key] = values;
                setInputValues(newValues);
            }
        });

        const dbRef = doc(db, "spotify", formId);

        // Set the new value
        await updateDoc(dbRef, {
            api_urls: inputValues
        });
        setOpenSnack(true);

    };

    const getSpotifyValues = async () => {
        const querySnapshot = await getDocs(collection(db, "spotify"));
        return {
            data: querySnapshot?.docs[0]?.data(),
            id: querySnapshot?.docs[0]?.id
        }
    };

    const listSpecials = (urls, type) => {
        const listItems = [];
        urls.forEach((url, i) => {
            listItems.push(
                <Box key={i} sx={{
                    width: '50%'
                }}>
                    <Input
                        name={`${type}${i}`}
                        type={`text`}
                        placeholder={type}
                        defaultValue={url}
                        required
                        sx={{
                            width: '90%'
                        }}
                    />
                </Box>
            );
        });
        return listItems;
    }

    useEffect(() => {
        getSpotifyValues().then(({data, id}) => {
            setInputValues(data.api_urls)
            setFormId(id)
        });
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
                            {listSpecials(inputValues.flyings_urls, 'flyings')}
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
                            {listSpecials(inputValues.runnings_urls, 'runnings')}
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
                                    name={`embed_url`}
                                    type={`text`}
                                    placeholder={`Embed URL`}
                                    required
                                    defaultValue={inputValues.embed_url}
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
                                    name={`fav_user_url`}
                                    type={`text`}
                                    placeholder={`Fav User URL`}
                                    required
                                    defaultValue={inputValues.fav_user_url}
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
                    <Box sx={{padding: '15px', backgroundColor: 'error.main', color: 'white'}}>
                        <Typography
                            variant={`h4`}
                            sx={{
                                paddingInline: '10px'
                            }}
                        >
                            Changes will effect <b>DATABASE</b> directly.
                        </Typography>
                    </Box>

                    <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={openSnack} autoHideDuration={1000} onClose={() => setOpenSnack(false)}>
                        <Alert severity="success" sx={{width: '100%'}}>
                            Changed Succesfully !
                        </Alert>
                    </Snackbar>
                </>
            );
    } else {
        return <CircularProgress color={"inherit"} sx={{display: 'flex', marginInline: 'auto', marginBlock: '10px'}}/>
    }
}

export default SpotifyPage;