import React from 'react';
import {Button, Form} from "react-bootstrap";



const ContForm = () => {

    return (
        <div className="container" style={{marginTop:"100px",marginBottom:"50px",backgroundColor:"#e1e6e8"}}>
            <h2>Geen Passende Vacatures gevonden ?!!</h2>
            <p>Je Kan Alijd een open Solicitatie doen </p>
        <div className="card align-items-center container-md" style={{
            marginTop:"25px",
            marginBottom:"50px",
            backgroundImage: "url(/images/formbg.png)"
        }}>
        <Form style={{
            top:"10%",
            bottom:"20%",
            textAlign:'left',
            display: "inline-block",
            maxWidth:" 80%",
            padding:"20px"
        }}>
            <div className="form-group container">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">First and last name</span>
                    </div>
                    <input type="text" aria-label="First name" className="form-control"/>
                        <input type="text" aria-label="Last name" className="form-control"/>
                </div>
                <br/>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Email Address</span>
                    </div>
                    <input type="text" aria-label="Last name" className="form-control"/>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Motivatie Brief</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <br/>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">CV Uploaden</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-dark">Submit</button>


            </div>
        </Form>
            </div>
        </div>
    )
}

export default ContForm;