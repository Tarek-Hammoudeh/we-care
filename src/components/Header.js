import Work1 from './../assets/img/cover1.jpg';
import work2 from './../assets/img/cover2.jpg';
import myImage from './../assets/img/cover3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Header=()=> {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={Work1}
                    alt="First slide"
                />
                <Carousel.Caption style={{
                    top:"10%",
                    right: "15%",
                 textAlign:'right',
                    maxWidth:" 600px",
                    left: 'auto',
                    padding:"20px"
                }}>
                    <h3 style={{
                        color:"white"
                    }}>Why do we use it?</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={work2}
                    alt="Second slide"
                />

                <Carousel.Caption style={{
                    top:"40%",
                    left: "15%",
                    textAlign:'left',
                    maxWidth:" 600px",
                    right: 'auto',
                    padding:"20px"
                }}>
                    <h3 style={{
                        color:"black"
                    }}>Where does it come from?</h3>
                    <p style={{
                        color:"white"
                    }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={myImage}
                    alt="Third slide"
                />

                <Carousel.Caption style={{
                    top:"40%",
                    right: "15%",
                    textAlign:'right',
                    maxWidth:" 600px",
                    left: 'auto',
                    padding:"20px"
                }}>
                    <h3 style={{
                        color:"white"
                    }}>What is Lorem Ipsum?</h3>
                    <p style={{
                        color:"black"
                    }}>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Header;