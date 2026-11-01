import { Link } from "react-router-dom";
import NavBar from "../NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Link to='/user'>Clique ici pour te rendre sur la User</Link>;
    </div>
  );
}

export default Home;
