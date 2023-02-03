import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">All galleries</Link>{" "}
      <Link to="/create">Create new gallery</Link>
    </nav>
  );
};
