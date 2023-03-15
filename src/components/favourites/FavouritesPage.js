import {Grid} from "@mui/material";
import FavouritesSection from "./components/FavouritesSection";

const FavouritesPage = () => {



    return (
        <Grid container spacing={0} sx={{height: '100vh'}}>
            <Grid item xs={12}>
                <FavouritesSection />
            </Grid>
        </Grid>
    );
}

export default FavouritesPage;