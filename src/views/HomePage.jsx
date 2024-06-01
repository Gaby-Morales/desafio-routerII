import { Container } from "react-bootstrap";
import pikachu from "../assets/img/pikachu.png";

const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">Bienvenido maestro pokemón</h1>
      <img src={pikachu} alt="Pikachu" width="200" />
    </Container>
  );
};
export default HomePage;
