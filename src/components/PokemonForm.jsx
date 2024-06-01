import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PokemonForm = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results.map((pokemon) => pokemon.name));
      })
      .catch((error) => console.error("Error Pokemon api:", error));
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate(`/pokemones/${selectedPokemon}`);
  };

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  return (
    <Form onSubmit={handleFormSubmit} className="d-flex flex-column align-items-center w-100">
      <Form.Group controlId="pokemonSelect" className="w-25 mb-4">
        <Form.Control as="select" value={selectedPokemon} onChange={handleSelectChange}>
          <option value="" disabled>
            Pokemones
          </option>
          {pokemonList.map((pokemon, index) => (
            <option key={index} value={pokemon}>
              {pokemon}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="dark" type="submit">
        Ver detalles
      </Button>
    </Form>
  );
};

export default PokemonForm;
