import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import alertContext from "../context/alert/alertContext";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    emai: "",
    password: "",
  });

  const navigate = useNavigate();

  const context = useContext(alertContext);
  const { showAlert } = context;

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const host = process.env.REACT_APP_BACKEND_URL;
    const url = `${host}/api/auth/signup`;
    const data = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const jsonResponse = await response.json();

      if (jsonResponse.success === true) {
        localStorage.setItem("token", jsonResponse.authToken);
        navigate("/");
        showAlert("User account created Successfully!", "success");
      } else {
        showAlert(jsonResponse.error, "danger");
      }
    } catch (error) {
      showAlert("Something is wrong", "danger");
    }
  };

  return (
    <div>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="eg: John Doe"
            onChange={onChange}
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="col-auto">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              aria-describedby="passwordHelpInline"
              placeholder="At least 5 characters"
              onChange={onChange}
              required
              minLength={5}
            />
          </div>
        </div>
        <button className="btn btn-primary my-2" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
