export const CreateGalleryForm = ({
  gallery,
  onChangeHandler,
  submitHandler,
  addURLHandler,
  removeURLHandler,
  URLChangeHandler,
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
      <input
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
              <input
                name="url"
                placeholder="Enter Image URL"
                value={imageURL}
                onChange={(e) => URLChangeHandler(e, index)}
              />
              <div className="btn-box">
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
            </div>
          );
        })}
      <br />
      <button type="button" onClick={addURLHandler}>
        Add another URL
      </button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
