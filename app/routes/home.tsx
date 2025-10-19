import type { Route } from "./+types/home";
import PillNav from '../components/PillNav/PillNav';
import Prism from '../components/Prism/Prism';
import logo from '../images/logo.svg';
import AboutMe from '../components/Articles/AboutMe';
import Projects from '../components/Articles/Projects';
import RotatingText from '../components/RotatingText/RotatingText';
import BtnFancy from '../components/BtnFancy/BtnFancy';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
        <div id="home">
          <Prism
            animationType="rotate"
            timeScale={0.35}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1.5}
            noise={0.5}
            glow={1}
          />
          <PillNav
          logo={logo}
          items={[
            { label: 'Home', href: '#home' },
            { label: 'About Me', href: '#aboutme' },
            { label: 'Projects', href: '#projects' },
            { label: 'Contact', href: '#contact' }
          ]}
          activeHref="#home"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          />

          
          <RotatingText
            texts={['programmer', 'developer', 'creator', 'student']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
          <BtnFancy />
    </div>
          <section id="aboutme">
            <AboutMe />
          </section>

          <section id="projects">
            <Projects />
          </section>
        </>
}
