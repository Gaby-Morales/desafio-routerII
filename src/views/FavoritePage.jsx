import { Container } from "react-bootstrap";
import FavoritePokemons from "../components/FavoritePokemons";

const PokemonPage = () => {
  return (
    <Container className="pt-5 d-flex flex-column align-items-center">
      <h1 className="mb-4">Pokemones favoritos</h1>
      <FavoritePokemons />
    </Container>
  );
};
export default PokemonPage;
