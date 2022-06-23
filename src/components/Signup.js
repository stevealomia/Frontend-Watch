import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//import Error from "../styles/Error"
import {Form, Button} from 'react-bootstrap'

function Signup({ setCurrentUser }) {
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    password: "",
  });

  const history = useHistory();
  const { name, age, email, password } = formData;

  const handleChange = (e) => {
    const key = e.target.name;

    setFormData({
      ...formData,
      [key]: e.target.value,
    });
  };

  const goBack = () => {
    history.push("/");
  };

  const createUser = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch("/signup", configObj).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          history.push("/favorites");
          /* window.location = '/favorites' */
        });
      } else {
        r.json().then((err) => {
          console.log(err.errors);
          setErrors(err.errors);
          alert(err.errors[0]);
        });
      }
    });
  };

  return (
    <div className="col-4">
      <Form onSubmit={createUser}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" onChange={handleChange} name="name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" onChange={handleChange} name="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" type="submit">
            Signup
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

export default Signup;
