import '../styles/globals.css'
import {ThemeProvider, useTheme} from "@mui/material";

export default function App({Component, pageProps}) {
    return (
        <ThemeProvider theme={useTheme()}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
