import React, { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (pokemon) => {
    if (favorites.some((fav) => fav.id === pokemon.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== pokemon.id));
    } else {
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons, favorites, toggleFavorite }}>
      {children}
    </PokemonContext.Provider>
  );
};
