import TracksSection from "./components/TracksSection";
import EmbedSection from "./components/EmbedSection";
import {Grid} from "@mui/material";
import Sidebar from "../layouts/components/Sidebar";


const HomePage = () => {


    return (
        <Grid container spacing={0} sx={{minHeight: '100vh'}}>
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