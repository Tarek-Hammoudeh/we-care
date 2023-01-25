import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import myImage from "../assets/img/logo3.png";
import Navbar from "react-bootstrap/Navbar";

const Footer =()=>{

    return(
        <Navbar bg="dark" variant="dark " >

                <Nav  variant="white" className="me-auto">
                    <Nav.Link href="#main" style={{alignItems:"self-start",alignContent:"flex-start",left:"50%"}}>
                        <img src={myImage}
                             className="d-inline-block align-top"
                             alt=""
                        ></img><p>Neque porro quisquam est qui dolorem <br/>ipsum quia dolor sit amet, consectetur, adipisci<br/>
                        There is no one who loves pain itself<br/></p></Nav.Link>
                </Nav>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Werken-Bij</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Over Ons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                        </li>
                        <p style={{
                            color:"white"
                        }}>©  2023 All rights reserved</p>
                        <p>Made with </p>
                    </ul>
            <br/>





        </Navbar>

    )
}
export default Footer;