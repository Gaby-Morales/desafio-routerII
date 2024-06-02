import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { PokemonContext } from "../context/PokemonContext";

const PokemonGallery = () => {
  const { pokemons, setPokemons, toggleFavorite, favorites } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemons.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((data) => {
          const fetches = data.results.map((pokemon) =>
            fetch(pokemon.url).then((response) => response.json())
          );
          Promise.all(fetches).then((results) => {
            setPokemons(results);
            setLoading(false);
          });
        });
    } else {
      setLoading(false);
    }
  }, [pokemons, setPokemons]);

  const handleHeartClick = (pokemon) => {
    toggleFavorite(pokemon);
  };

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status"></Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {pokemons.map((pokemon) => (
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
    </Container>
  );
};

export default PokemonGallery;
