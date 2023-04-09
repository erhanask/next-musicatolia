import Sidebar from "./components/Sidebar";
import {Grid, useMediaQuery, useTheme} from "@mui/material";
import styles from "../../../styles/Home.module.css";

export const revalidate = 60;

const LayoutWithSidebar = ({page}) => {

    const isDownMd = useMediaQuery(useTheme().breakpoints.down("md"));


    return (
        <main className={styles.main}>
            <Grid container spacing={0} sx={{minHeight: '100vh'}}>
                <Grid item md={1} sx={{
                    position: isDownMd ? 'absolute':'initial',
                    zIndex: 2,
                    width: isDownMd ? '17%':'initial',
                    height: '100vh'
                }}>
                    <Sidebar/>
                </Grid>
                <Grid item md={11} xs={12}>
                    {page}
                </Grid>
            </Grid>
        </main>
    );
}

export default LayoutWithSidebar;