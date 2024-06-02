import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import FavoritePage from "./views/FavoritePage";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favoritos" element={<FavoritePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
