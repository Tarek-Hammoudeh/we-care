import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import myImage from './../assets/img/logo3.png';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variantfill="pills"  variant="dark" className="sticky-top nav nav-tabs" >
                <Container>
                    {/*<Navbar.Brand href="#home">We Care*/}


                    {/*</Navbar.Brand>*/}
                    <Nav  variant="dark" className="nav nav-tabs">
                        <Nav.Link href="/">
                            <img src={myImage}
                                 className="d-inline-block align-top"
                                 alt=""
                            /></Nav.Link>
                        <Nav.Link href="/Home"><h5 style={{color:"#afb9b9"}}>Home</h5></Nav.Link>
                        <Nav.Link href="/"><h5 style={{color:"#afb9b9"}}>Werken Bij</h5></Nav.Link>
                        <Nav.Link href="/About"><h5 style={{color:"#afb9b9"}}>Over Ons</h5></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}
export default NavBar