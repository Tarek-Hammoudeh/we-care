import NavBar from "../components/NavBar";

import Footer from "../components/footer";

const Home =()=> {
    return (

        <div >
            <NavBar/>
            <div style={{
                marginTop:"10%",
                marginBottom:"10%",
                textAlign:"center"
            }}> <h1>Home Sweet Home </h1>

            </div>
            <Footer/>
        </div>
    );
}

export default Home;
