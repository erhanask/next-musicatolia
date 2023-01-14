import {Box, Divider} from "@mui/material";
import Link from "next/link";

const Sidebar = () => {

    return (
        <Box sx={{
            height: '100%',
            background: '#FAFAFA',
            paddingInline: '12px',
            paddingBlock: '21px'
        }}>
            <Link href={'/'}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        transition: 'background-color .2s',
                        borderRadius: '14px',
                        '&:hover' : {
                            backgroundColor:  'rgb(235, 235, 235)'
                        }
                    }}
                    alt={'site_logo'}
                    src="/icons/logo.png"
                />
            </Link>
            <Divider sx={{ marginBlock: '21px',borderColor: 'rgba(0, 0, 0, 0.1)' }} />
            <Link href={'/'}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        transition: 'opacity .2s',
                        '&:hover' : {
                            opacity: .5
                        }
                    }}
                    alt={'main_track'}
                    src="/icons/main-track-icon.svg"
                />
            </Link>
        </Box>
    );
}
//TODO : logo will be placed here.

export default Sidebar;