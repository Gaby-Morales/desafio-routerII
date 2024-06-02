import { Container } from "react-bootstrap";
import PokemonGallery from "../components/PokemonGallery";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido maestro pokemón</h1>
      <PokemonGallery />
    </Container>
  );
};
export default HomePage;
