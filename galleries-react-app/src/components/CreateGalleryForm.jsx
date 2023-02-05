export const CreateGalleryForm = ({
  gallery,
  onChangeHandler,
  submitHandler,
  addURLHandler,
  removeURLHandler,
  URLChangeHandler,
  moveUpHandler,
  moveDownHandler,
}) => {
  return (
    <form onSubmit={submitHandler}>
      <label>Title</label>
      <br />
      <input
        required
        minLength={2}
        maxLength={255}
        type="text"
        value={gallery.name}
        name="name"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>Description</label>
      <br />
      <textarea
        rows="11"
        cols="100"
        maxLength={1000}
        type="text"
        value={gallery.description}
        name="description"
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <label>Image URL</label>
      <br />
      {gallery &&
        gallery.url.map((imageURL, index) => {
          return (
            <div key={index} className="box">
              {index === 0 ? (
                <input
                  required
                  name="url"
                  type="url"
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpe?g|.png|.gif)"
                  placeholder="Enter Image URL"
                  value={imageURL}
                  onChange={(e) => URLChangeHandler(e, index)}
                />
              ) : (
                <input
                  name="url"
                  type="url"
                  pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpe?g|.png|.gif)"
                  placeholder="Enter Image URL"
                  value={imageURL}
                  onChange={(e) => URLChangeHandler(e, index)}
                />
              )}{" "}
              {index != 0 && (
                <button
                  type="button"
                  className="mr10"
                  onClick={() => moveUpHandler(index)}
                >
                  Move Up
                </button>
              )}{" "}
              {index != gallery.url.length - 1 && (
                <button
                  type="button"
                  className="mr10"
                  onClick={() => moveDownHandler(index)}
                >
                  Move Down
                </button>
              )}{" "}
              {gallery.url.length !== 1 && (
                <button
                  type="button"
                  className="mr10"
                  onClick={() => removeURLHandler(index)}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      <br />
      <button type="button" onClick={addURLHandler}>
        Add another URL
      </button>
      <br />
      <button type="submit">Submit</button>{" "}
      <button
        type="button"
        onClick={() => window.location.replace("/my-galleries")}
      >
        Cancel
      </button>
    </form>
  );
};
