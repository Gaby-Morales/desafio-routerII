import { Container } from "react-bootstrap";
import PokemonForm from "../components/PokemonForm";

const PokemonPage = () => {
  return (
    <Container className="pt-5 d-flex flex-column align-items-center">
      <h1 className="mb-4">Selecciona un pokemon</h1>
      <PokemonForm />
    </Container>
  );
};
export default PokemonPage;
