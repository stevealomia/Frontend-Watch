import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

const style = {
}

function Landing() {
  let history = useHistory();

  return (
    <div className="text-center" style={style}>
      <h1 style={{ marginTop: '10rem', marginBottom: '3rem' }}>Let us help you choose your watches</h1>

      <Button
      size="lg"
      variant="success"
        onClick={() => {
          history.push("/signup");
        }}
      >
        Signup
      </Button>
      {' '}
      <Button
      size="lg"
      variant="primary"
        onClick={() => {
          history.push("/login");
        }}
      >
        Login
      </Button>
    </div>
  );
}

export default Landing;
