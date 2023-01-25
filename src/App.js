import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import workBy from "./pages/workBy";
import About from "./pages/aboutUs";
import Home from "./pages/home";
import WorkBy from "./pages/workBy";

function App() {
    return (
        <Routes>

                    <Route exact path="/" element={<WorkBy/>} />
                    <Route path ="/Home" element={<Home/>} />
                    <Route path="/About" element={<About/>} />

        </Routes>

    );
}
export default App;