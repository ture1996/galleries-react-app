import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const GalleryDetails = ({
  gallery,
  user,
  comments,
  handleSelect,
  index,
}) => {
  return (
    <div>
      <h1>{gallery.name}</h1>
      <Link to={`authors/${user.id}`}>
        {user.first_name} {user.last_name}
      </Link>
      <br />
      {gallery.description}
      <br />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        {gallery.url.map((url, key = 0) => (
          <Carousel.Item key={key++}>
            <img className="d-block w-100" src={url} />
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
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};
