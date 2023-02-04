import TracksSection from "./components/TracksSection";
import EmbedSection from "./components/EmbedSection";
import {Grid} from "@mui/material";

const HomePage = () => {

    //TODO: added useEffect to get album data from spotify api
    return (
        <Grid container spacing={0} sx={{height: '100vh'}}>
            <Grid item xs={6}>
                <TracksSection/>
            </Grid>
            <Grid item xs={6}>
                <EmbedSection/>
            </Grid>
        </Grid>
    );
}

export default HomePage;