export const LoginDetails = ({ credentials, handleOnChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>Email</label>
      <input
        required
        type="email"
        name="email"
        value={credentials.email}
        onChange={handleOnChange}
      />
      <br />
      <label>Password</label>
      <input
        required
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleOnChange}
      />
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};
