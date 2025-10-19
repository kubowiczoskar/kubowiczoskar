import Article from "../Article/Article";
import TiltedCard from '../TiltedCard/TiltedCard';
import me from '../../images/me.jpeg';
import ElectricBorder from '../ElectricBorder/ElectricBorder';

export default function AboutMe(){
    return(
        <Article>
            <TiltedCard
              imageSrc={me}
              altText="Oskar Kubowicz"
              captionText="I know, it's a cool photo"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={15}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Yup, that's me!
                </p>
              }
            />

            <ElectricBorder
              color="#ffffffff"
              speed={0.75}
              chaos={0.85}
              thickness={4}
              style={{ borderRadius: 16 }}
            >
              <div>
                <h1>Cześć / Dzień dobry!</h1>
                <p>Witaj w moim świecie,
                  nazywam się Oskar Kubowicz i jestem pasjonatem technologii webowych oraz programowania.
                  Od najmłodszych lat fascynowałem się komputerami i tym, jak działają aplikacje internetowe.
                  Moja przygoda z programowaniem rozpoczęła się kilka lat temu i od tego czasu nieustannie rozwijam swoje umiejętności.
                </p>
              </div>
            </ElectricBorder>
        </Article>
    );
}