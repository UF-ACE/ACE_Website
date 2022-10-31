import { Parallax } from 'react-scroll-parallax';

const ParallaxContainer = ({speed, children}) => {
  return (
    <Parallax speed={speed}>
        {children}
    </Parallax>
  )
};

export default ParallaxContainer;