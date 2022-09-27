// import "./navbar.css"

// const Navbar = () => {
//     return(
//         <div className="navbar">
//         <div className="navContainer">
//             <span className="logo" ><a href="http://localhost:3000">openCulture</a></span>
//             <div className="navItems">
//             <button className="navButton" ><a href="/register" >Register</a></button>
//                 <button className="navButton" ><a href="/login" >Login</a></button>
//             </div>
//         </div>
//         </div>
//     )
// }
// export default Navbar

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="http://localhost:3000">openCulture</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="http://localhost:3000">Home</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
            <NavDropdown title="Books" id="navbarScrollingDropdown">
            <NavDropdown.Item href="books">Books</NavDropdown.Item>
              <NavDropdown.Item href="audiobooks">AudioBooks</NavDropdown.Item>
              <NavDropdown.Item href="ebooks">e-Books</NavDropdown.Item>
              <NavDropdown.Item href="authors">Authors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="accessories">
                Accessories
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="courses">Courses</Nav.Link>
            <Nav.Link href="shop">Shop</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;