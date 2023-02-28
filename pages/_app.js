import '../styles/globals.css'
import {ThemeProvider, useTheme} from "@mui/material";
import {AuthContextProvider} from "../src/context/AuthContext";

export default function App({Component, pageProps}) {
    return (
        <AuthContextProvider>
            <ThemeProvider theme={useTheme()}>
                <Component {...pageProps} />
            </ThemeProvider>
        </AuthContextProvider>
    );
}
