import Sidebar from "./components/Sidebar";
import {Grid} from "@mui/material";
import styles from "../../../styles/Home.module.css";


const LayoutWithSidebar = ({page}) => {

    return (
        <main className={styles.main}>
            <Grid container spacing={0} sx={{minHeight: '100vh'}}>
                <Grid item xs={1}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={11}>
                    {page}
                </Grid>
            </Grid>
        </main>
    );
}

export default LayoutWithSidebar;