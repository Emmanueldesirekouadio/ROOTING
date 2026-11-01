import { Link } from "react-router-dom";
import NavBar from "../NavBar";

function User() {
  return (
    <div>
      <NavBar />
      <Link to='/'>Clique pour te rendre sur la Home</Link> <br />
      <Link to='/fullstack'> Clique pour te rendre sur Fullstack</Link>
    </div>
  );
}

export default User;
