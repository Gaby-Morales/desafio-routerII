import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { PokemonContext } from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const FavoritePokemons = () => {
  const { favorites, toggleFavorite } = useContext(PokemonContext);
  const navigate = useNavigate();

  const handleBackToGallery = () => {
    navigate("/");
  };

  const handleHeartClick = (pokemon) => {
    toggleFavorite(pokemon);
  };

  return (
    <Container className="mt-4">
      {favorites.length === 0 ? (
        <div className="text-center">
          <p>Aún no has seleccionado pokemones favoritos</p>
          <Button variant="dark" onClick={handleBackToGallery}>
            Volver a la galería
          </Button>
        </div>
      ) : (
        <Row>
          {favorites.map((pokemon) => (
            <Col key={pokemon.id} xs={12} sm={6} md={3} lg={2} className="mb-4">
              <Card className="pokemon-card">
                <div className="heart-container" onClick={() => handleHeartClick(pokemon)}>
                  <FaHeart
                    className={`heart ${
                      favorites.some((fav) => fav.id === pokemon.id) ? "clicked" : ""
                    }`}
                  />
                </div>
                <Card.Img variant="top" src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Card.Body>
                  <Card.Title className="text-center">{pokemon.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritePokemons;
