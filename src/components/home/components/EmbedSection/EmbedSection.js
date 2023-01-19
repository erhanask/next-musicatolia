import {Box} from "@mui/material";
import {SpotifyEmbed} from "./components";

const EmbedSection = () => {
    return (
        <Box sx={{
            backgroundColor: '#FAFAFA',
            height: '100vh',
            borderRight: '1px solid rgba(0, 0, 0, 0.1);',
            padding: '18px 24px'
        }}
        >
            <SpotifyEmbed/>
        </Box>
    );
}

export default EmbedSection;