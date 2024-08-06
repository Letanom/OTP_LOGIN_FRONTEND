import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
         <Navbar.Brand href='#home'>OTPLOGIN</Navbar.Brand>
         <Nav className=''>
            <Nav.Link href="#home">Register</Nav.Link>
         </Nav>
        </Container>
    </Navbar>
      
      
    </>
  );
}

export default ColorSchemesExample;