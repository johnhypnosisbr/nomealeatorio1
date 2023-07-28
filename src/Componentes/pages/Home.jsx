
import Container from 'react-bootstrap/Container';
import ControlledCarousel from '../Carousel';
import CompNavbar from '../Navbar';

function Home() {
  return (
    <Container>
      
      <CompNavbar />
      <ControlledCarousel />
    </Container>
  );
}

export default Home;