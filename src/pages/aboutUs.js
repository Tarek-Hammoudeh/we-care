import NavBar from "../components/NavBar";
import Footer from "../components/footer";

const About=()=> {
    return (

      <div>
            <NavBar/>
            <div style={{
                marginTop:"10%",
                marginBottom:"10%",
                textAlign:"center"
            }}
            ><h1> We Are the best of the best </h1></div>
            <Footer/>
        </div>
    );
}

export default About;
