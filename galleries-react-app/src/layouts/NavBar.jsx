import { Link } from "react-router-dom";
import { authService } from "../services/AuthService";

export const NavBar = () => {
  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <nav>
          <Link to="/">All galleries</Link>{" "}
          <Link to="/my-galleries">My galleries</Link>{" "}
          <Link to="/create">Create new gallery</Link>{" "}
          <a
            role="button"
            className="toggleable"
            onClick={() => authService.logout()}
          >
            Logout
          </a>
        </nav>
      ) : (
        <nav>
          <Link to="/">All galleries</Link> <Link to="/login">Login</Link>{" "}
          <Link to="/register">Register</Link>
        </nav>
      )}
    </div>
  );
};
