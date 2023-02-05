import { useState } from "react";
import { RegisterDetails } from "../components/RegisterDetails";
import { authService } from "../services/AuthService";
import { useDispatch } from "react-redux";

export const Register = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: 0,
  });

  const changeHandler = (e) => {
    console.log(credentials);
    if (e.target.name == "terms") {
      setCredentials({ ...credentials, [e.target.name]: e.target.checked });
      return;
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!credentials.email || !credentials.password) {
      alert("Bad credentials");
      return;
    }
    await authService.register(credentials);
  };

  return (
    <RegisterDetails
      credentials={credentials}
      handleOnChange={(e) => changeHandler(e)}
      handleSubmit={(e) => submitHandler(e)}
    />
  );
};
