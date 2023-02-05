import { Link } from "react-router-dom";

export const GalleriesDetails = ({ gallery, user, key = 0 }) => {
  return (
    <div>
      <Link to={`/galleries/${gallery.id}`}>{gallery.name}</Link>
      <br />
      <a key={key++} target="_blank" href={gallery.url[0]}>
        <img src={gallery.url[0]} width="600px" height="500px" />
      </a>
      <br />
      Created at: {gallery.created_at}
      <br />
      {user && (
        <div>
          Created by:{" "}
          <Link to={`/authors/${user.id}`}>
            {user.first_name} {user.last_name}
          </Link>
          <br />{" "}
        </div>
      )}
      <br />
    </div>
  );
};
