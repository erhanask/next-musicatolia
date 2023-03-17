import {Box, Divider} from "@mui/material";
import Link from "next/link";
import {useState} from "react";

const Sidebar = () => {

    const [navOpen, setNavOpen] = useState(true);



    return !navOpen ? (
        <Box sx={{
            height: '8%',
            background: '#FAFAFA',
            paddingInline: '5px',
            display: 'flex',
            flexDirection: 'column',
            transition: 'display .5s',
            position: 'absolute',
            top: '50%',
            left: 0,
            border: '1px solid #D3D1D1FF',
            borderLeft: 0
        }}
        onClick={()=>{setNavOpen(true)}}
        >
        <Box
            component="img"
            sx={{
                display:{sm: 'block',md: 'none'},
                width: '100%',
                marginBlock: 'auto',
                transition: 'opacity .2s',
                '&:hover' : {
                    opacity: .5
                }
            }}
            alt={'guides'}
            src="/icons/mobile-nav-open-icon.svg"
        />
        </Box>
    ):(
        <Box sx={{
            height: '100%',
            background: '#FAFAFA',
            paddingInline: '12px',
            paddingBlock: '21px',
            display: 'flex',
            flexDirection: 'column'
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
            <Link href={'/favourites'}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        transition: 'opacity .2s',
                        '&:hover' : {
                            opacity: .5
                        }
                    }}
                    alt={'favourites'}
                    src="/icons/heart-icon.svg"
                />
            </Link>
            <Link href={'/guide'}>
                <Box
                    component="img"
                    sx={{
                        width: '100%',
                        transition: 'opacity .2s',
                        '&:hover' : {
                            opacity: .5
                        }
                    }}
                    alt={'guides'}
                    src="/icons/book-icon.svg"
                />
            </Link>
            <Box
                component="img"
                sx={{
                    display:{sm: 'block',md: 'none'},
                    width: '100%',
                    marginBlock: 'auto',
                    transition: 'opacity .2s',
                    '&:hover' : {
                        opacity: .5
                    }
                }}
                onClick={()=>{setNavOpen(false)}}
                alt={'guides'}
                src="/icons/mobile-nav-close-icon.svg"
            />
            <Link href={'/settings'} style={{marginTop: 'auto'}}>
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
                    src="/icons/settings-icon.svg"
                />
            </Link>
        </Box>
    );
}

export default Sidebar;