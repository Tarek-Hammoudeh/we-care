import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import myImage from './../assets/img/logo2.png';

const NavBar =()=>{
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    {/*<Navbar.Brand href="#home">We Care*/}
                        <img
                            src={myImage}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    {/*</Navbar.Brand>*/}
                    <Nav className="me-auto">
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