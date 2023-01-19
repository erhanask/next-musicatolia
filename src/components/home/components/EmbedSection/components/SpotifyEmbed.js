import {Box} from "@mui/material";

const SpotifyEmbed = () => {

    if (typeof window !== 'undefined') {
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            let element = document.getElementById('spotify-embed');
            let options = {
                uri: 'spotify:episode:7makk4oTQel546B0PZlDM5'
            };
            let callback = (EmbedController) => {
            };
            IFrameAPI.createController(element, options, callback);
        }
    }

    return (
        <>
            <Box id={`spotify-embed`}/>
            <iframe style={{borderRadius:'12px'}}
                    src="https://open.spotify.com/embed/playlist/4OIRpNAO3GtUiyIhEA7sAz?utm_source=generator&theme=0"
                    width="100%" height="100%" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </>
    );

}

export default SpotifyEmbed;