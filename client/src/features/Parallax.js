import { Parallax } from 'react-scroll-parallax';
import image from "../imgs/logo-min.png";
import { Image } from 'semantic-ui-react';

const ParallaxContainer = () => (
    <Parallax speed={-40}>
        <div>Julia's Sample Text :D</div>
        <Image src={image} size='medium'></Image>
    </Parallax>
);

export default ParallaxContainer;