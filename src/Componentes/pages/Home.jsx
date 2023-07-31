
import Container from 'react-bootstrap/Container';
import ControlledCarousel from '../Carousel';
import CompNavbar from '../Navbar';
import FeaturedComp from '../Featured';

function Home() {
  return (
    <Container>

      <CompNavbar />
      <ControlledCarousel />
      <FeaturedComp />
    </Container>
  );
}

export default Home;