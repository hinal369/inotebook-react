import React, { useState } from "react";

const Signup = () => {
  const [ userData, setUserData ] = useState({ name: "", emai: "", password: "" });

  const onChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div>
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
            placeholder="At least 8 characters"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Confirm Password
        </label>
        <div className="col-auto">
          <input
            type="password"
            id="password"
            className="form-control"
            aria-describedby="passwordHelpInline"
            placeholder="Same as password"
            onChange={onChange}
          />
        </div>
      </div>
      <button className="btn btn-primary my-2" type="submit">
        Signup
      </button>
    </div>
  );
};

export default Signup;
