import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from './login.css';

import Navbarr from "../../components/navbar/Navbar";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }

  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
        
      // <div className={styles.Login}>
      //   <Navbarr/>
      //   <div className={styles.header}>

      //   <h1 className={styles.loginlabel}> Log in </h1>
      //   </div>  
      //   <div className={styles.loginform}>
      //   <Form onSubmit={handleSubmit}>
      //     <Form.Group size="lg" controlId="email">
      //       <Form.Label className={styles.email}>Email</Form.Label>
      //       <Form.Control
      //         autoFocus
      //         type="email"
      //         value={email}
      //         onChange={(e) => setEmail(e.target.value)}
      //       />
      //     </Form.Group>
      //     <Form.Group size="lg" controlId="password">
      //       <Form.Label className={styles.password}>Password</Form.Label>
      //       <Form.Control
      //         type="password"
      //         value={password}
      //         onChange={(e) => setPassword(e.target.value)}
      //       />
      //     </Form.Group>
      //     <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
      //       Login
      //     </Button>
      //   </Form>
      //   </div>
      // </div>
      <>
      <Navbarr/>
      <div className="d-flex justify-content-center mt-5">
      <div className="w-50 border p-5 row col-md-6">
      <Form class="col-md-6">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      </div></>
    );
  }