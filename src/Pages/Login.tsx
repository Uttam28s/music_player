import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export interface Credentials {
  email: string;
  password: string;
}

const LoginPage = () => {
    const navigate = useNavigate()
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(credentials?.email === "test@123.com" && credentials?.password === "12345678")
    {
      localStorage.setItem("User", JSON.stringify({ name: 'testUser', email: credentials?.email }));
        navigate('/home')
    }else{
      window.alert("Wrong Credentials")
    }
  };

  return (
    <div className="container mt-5 w-50">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
