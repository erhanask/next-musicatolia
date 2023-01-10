import {Box} from "@mui/material";
import Image from "next/image";

const Sidebar = () => {

    return (
        <Box sx={{
            height: '100%',
            background: '#FAFAFA',
            paddingInline: '12px',
            paddingBlock: '21px'
        }}>
            <Image alt={'site_logo'} src={`/icons/logo.png`} width="70" height="70" />

        </Box>
    );
}
//TODO : logo will be placed here.

export default Sidebar;