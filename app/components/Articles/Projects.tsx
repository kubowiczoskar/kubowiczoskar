import Article from "../Article/Article";
import "./Projects.css";
import MagicBento from "../MagicBento/MagicBento";

export default function Projects(){
    return(
        <Article>
            <h1>Tu znajdziesz moje projekty.</h1>
            <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </Article>
    );
}