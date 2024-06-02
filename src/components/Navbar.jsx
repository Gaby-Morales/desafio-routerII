import { Container, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import pokemon_logo from "../assets/img/pokemon_logo.svg";

const Navigation = () => {
  const location = useLocation();

  const isCurrentRoute = (route) => {
    const isCurrent = location.pathname === route;
    return isCurrent;
  };

  const linkStyle = (route) => {
    return {
      color: isCurrentRoute(route) ? "red" : "white",
    };
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="justify-content-between">
        <Navbar.Brand>
          <NavLink to="/" className="ms-3 text-decoration-none">
            <img src={pokemon_logo} alt="Pokemon logo" className="w-100" />
          </NavLink>
        </Navbar.Brand>
        <div>
          <NavLink to="/" className="ms-3 text-decoration-none" style={linkStyle("/")}>
            Home
          </NavLink>
          <NavLink
            to="/favoritos"
            className="ms-3 text-decoration-none"
            style={linkStyle("/favoritos")}
          >
            Favoritos
          </NavLink>
        </div>
      </Container>
    </Navbar>
  );
};
export default Navigation;
