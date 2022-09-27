// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Navbar from "../../components/navbar/Navbar";
// import "./register.css";

// export default function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     function validateForm() {
//       return email.length > 0 && password.length > 0;
//     }

  
//     function handleSubmit(event) {
//       event.preventDefault();
//     }
  
//     return (
        
//       <div className="Register">
//         <Navbar/>
//         <h1 className="registerlabel"> Register </h1>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group size="lg" controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               autoFocus
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group size="lg" controlId="password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
//             Register
//           </Button>
//         </Form>
//       </div>
//     );
//   }
import Navbarr from "../../components/navbar/Navbar";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
function Register() {
  return (
    <>
  <Navbarr/>
    <div className="d-flex justify-content-center mt-5">
    <div className="w-50 border p-5 row col-md-6">
    <Form class="col-md-6">
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Your Name" />
      </Form.Group>
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
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="confirmpassword" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </>
  );
}

export default Register;