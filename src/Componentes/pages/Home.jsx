
import Container from 'react-bootstrap/Container';
import ControlledCarousel from '../Carousel';
import Produto from './Produto';

function Home() {
  return (
    <Container>
      <ControlledCarousel />
      <Produto />
    </Container>
  );
}

export default Home;