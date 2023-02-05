export const CreateCommentForm = ({
  comment,
  onChangeHandler,
  submitHandler,
}) => {
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      Post Comment:
      <br />
      <textarea
        rows="11"
        cols="100"
        required
        type="text"
        value={comment.body}
        onChange={(e) => onChangeHandler(e)}
      />
      <br />
      <button type="submit">Add comment</button>
    </form>
  );
};
