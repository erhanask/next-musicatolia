import {useAuthContext} from "../../../context/AuthContext";
import AuthForm from "../components/AuthForm";
import {Box, CircularProgress, Input, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {updateDoc, collection, doc, getDocs} from "firebase/firestore";
import {db} from "../../../config";

// TODO : spotify setting forms will be listed in here.
const SpotifyPage = () => {

    const {user} = useAuthContext();
    const [inputValues, setInputValues] = useState();
    const [formId, setFormId] = useState();
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // ...or output as an object
        console.log(data);


        // const washingtonRef = doc(db, "spotify", formId);

        // Set the "capital" field of the city 'DC'
        // await updateDoc(washingtonRef, {
        //     capital: true
        // });

        // e.preventDefault();
        //
        // const data = {
        //     'header': e.target[0].value,
        //     'content': e.target[1].value,
        //     'summary' : e.target[2].value
        // }
        //
        //
        // if (data.header !== null && data.content !== null && data.summary !== null) {
        //     // Add a new document with a generated id.
        //     const docRef = await addDoc(collection(db, "guides"), data);
        //     setIsUpdated(true);
        // }
    };

    const getSpotifyValues = async () => {
        const querySnapshot = await getDocs(collection(db, "spotify"));
        return {
            data : querySnapshot?.docs[0]?.data(),
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
                        value={url}
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
        getSpotifyValues().then(({data,id}) => {
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
                                name={`fav_user_url`}
                                type={`text`}
                                placeholder={`Fav User URL`}
                                required
                                value={inputValues.fav_user_url}
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