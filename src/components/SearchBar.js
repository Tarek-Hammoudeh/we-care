import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import {data} from "../assets/pages/Data";
import {useState} from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("")
    console.log(data.filter(data => data.title.toLowerCase().includes(query)))
    return (
        <div className="container"
             style={{
                 marginTop: "10px",
                 marginBottom: "opx"
             }}>
            <h1 style={{
                marginTop: "5px",
                marginBottom: "10px"
            }}> Search or Scroll down to check our vacancies <img src="images/search.png"
                                                                  className="rounded float-right" style={{
                width: "250px",
                height: "260"
            }}/></h1>
            <div style={{
                marginTop: "20px",
                marginBottom: "20px"
            }}>
                <div className="input-group">
                    <span className="input-group-text">Search Here </span>
                    <input type="text" aria-label="First name" className="form-control"
                           placeholder="Type Your job Here.."
                           onChange={e => setQuery(e.target.value)}
                    />
                </div>
                <div>
                    <button style={{
                        marginTop: "20px",
                        marginBottom: "20px"
                    }} type="button"
                            className="btn btn-outline-secondary">Let's Find It
                    </button>

                </div>
                <div className="row container g-3">
                    {data.filter(item => item.title.toLowerCase().includes(query))
                        .map((item, i) =>
                            <div key={i} className="col-12 col-md-6 col-lg-4">
                                <div className="card">
                                    <img src={item.image} alt="first job " className="card-img-top"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title + (1)}</h5>
                                        <p className="card-text">{item.desc}</p>
                                        <a href="#" className="btn btn-secondary">Read more</a>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>


            </div>
        </div>
    )
}
export default SearchBar;