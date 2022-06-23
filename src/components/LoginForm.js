import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {Form, Button} from 'react-bootstrap'

function LoginForm({ Login, error }) {
  let history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("details", details, Login);
    /* console.log(details) */
    //Login(details);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        window.location = "/watches";
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <div className="col-4">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={(e) => setDetails({ ...details, email: e.target.value })} name="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setDetails({ ...details, password: e.target.value })} name="password" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {' '}
          <Button variant="secondary" onClick={goBack}>
            Back
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default LoginForm;
