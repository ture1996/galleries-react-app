import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const GalleryDetails = ({
  gallery,
  user,
  comments,
  handleSelect,
  index,
  userId,
  handleDeleteComment,
  handleDeleteGallery,
}) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <h1>{gallery.name}</h1>
        {userId != null ? (
          <p style={{ marginLeft: "auto" }}>
            <button
              type="button"
              onClick={() => handleDeleteGallery(gallery.id)}
            >
              Delete
            </button>{" "}
            <button
              type="button"
              onClick={() =>
                window.location.replace(`/edit-gallery/${gallery.id}`)
              }
            >
              Edit
            </button>
          </p>
        ) : (
          ""
        )}
      </div>
      <Link to={`/authors/${user.id}`}>
        {user.first_name} {user.last_name}
      </Link>
      <br />
      {gallery.description}
      <br />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {gallery.url.map((url, key = 0) => (
          <Carousel.Item key={key++}>
            <a href={url} target="_blank">
              <img className="d-block w-100" src={url} />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>

      <h3>Comments:</h3>
      <ul id="remove">
        {comments.map((comment) => (
          <li key={comment.id}>
            <br />
            {comment.body}
            <h6>
              Posted by: {comment.user.first_name} {comment.user.last_name} at{" "}
              {comment.created_at}
            </h6>
            {comment.user_id == userId ? (
              <button
                type="button"
                onClick={() => handleDeleteComment(comment)}
              >
                Delete comment
              </button>
            ) : (
              ""
            )}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};
