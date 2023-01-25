import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import myImage from './../assets/img/logo3.png';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark " className="sticky-top">
                <Container>
                    {/*<Navbar.Brand href="#home">We Care*/}


                    {/*</Navbar.Brand>*/}
                    <Nav  variant="white" className="me-auto">
                        <Nav.Link href="#main">
                            <img src={myImage}
                                 className="d-inline-block align-top"
                                 alt=""
                            /></Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Werken Bij</Nav.Link>
                        <Nav.Link href="#pricing">Over Ons</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
export default NavBar