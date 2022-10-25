import { Parallax } from 'react-scroll-parallax';
import styles from "../pages/Home/HomePage.module.css";

const ParallaxContainer = (speed, component) => (
    <Parallax speed={speed}>
        <div className={styles.background_video}>
          {component}
        </div>
    </Parallax>
);

export default ParallaxContainer;