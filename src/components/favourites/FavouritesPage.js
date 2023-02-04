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
// TODO : My user ID.
// x11yvx5zawwdoa7x0k7yl6oqj

export default FavouritesPage;