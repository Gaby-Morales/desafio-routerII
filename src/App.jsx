import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import PokemonPage from "./views/PokemonPage";
import PokemonDetailsPage from "./views/PokemonDetailsPage";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemones" element={<PokemonPage />} />
        <Route path="/pokemones/:name" element={<PokemonDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
