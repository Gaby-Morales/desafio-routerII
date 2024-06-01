import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, ListGroup, Row, Col, Button } from "react-bootstrap";

const PokemonDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("El pokemon no existe");
        }
        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error Pokemon details:", error);
        navigate("/pokemones");
      });
  }, [name, navigate]);

  const handleBackClick = () => {
    navigate("/pokemones");
  };

  return (
    <div className="d-flex flex-column align-items-center w-100">
      {pokemonData && (
        <Card className="pokemon-card mt-4">
          <Row>
            <Col md={4} className="pokemon-image-container">
              <Card.Img
                variant="top"
                src={pokemonData.sprites.front_default}
                className="pokemon-image"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title>{pokemonData.name}</Card.Title>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>HP:</strong> {pokemonData.stats[0].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Attack:</strong> {pokemonData.stats[1].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Defense:</strong> {pokemonData.stats[2].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Special Attack:</strong> {pokemonData.stats[3].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Special Defense:</strong> {pokemonData.stats[4].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Speed:</strong> {pokemonData.stats[5].base_stat}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Types:</strong>{" "}
                  {pokemonData.types.map((type) => type.type.name).join(", ")}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
      )}
      <Button variant="dark" onClick={handleBackClick} className="mt-4">
        Volver atrás
      </Button>
    </div>
  );
};

export default PokemonDetails;
