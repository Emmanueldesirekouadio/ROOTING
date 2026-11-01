import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to='/mode-ia'> Mode IA </NavLink>
      <NavLink to='/tous'> Tous </NavLink>
      <NavLink to='/images'> Images </NavLink>
      <NavLink to='/actualise'>Actualités </NavLink>
      <NavLink to='/maps'>Maps </NavLink>
      <NavLink to='/plus'>Plus </NavLink>
      <NavLink to='/outils'>Outils </NavLink>
    </div>
  );
}

export default NavBar;
