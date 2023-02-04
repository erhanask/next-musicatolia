import {Grid} from "@mui/material";
import FavTrackCard from "./components";


const FavouritesSection = () => {


    return (
        <Grid container spacing={0} sx={{height: '100vh'}}>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
            <Grid item xs={2}>
                <FavTrackCard/>
            </Grid>
        </Grid>
    );
}


export default FavouritesSection;