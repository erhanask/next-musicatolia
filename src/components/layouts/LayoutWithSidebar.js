import Sidebar from "./components/Sidebar";
import {Grid} from "@mui/material";


const LayoutWithSidebar = ({page}) => {

    return (
        <Grid container spacing={0} sx={{minHeight: '100vh'}}>
            <Grid item xs={1}>
                <Sidebar />
            </Grid>
            <Grid item xs={11}>
                {page}
            </Grid>
        </Grid>
    );
}

export default LayoutWithSidebar;