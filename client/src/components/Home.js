import React, {useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import {PropertiesContext} from "../context/PropertiesProvider";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

function Home ({user}) {
    let {properties, setProperties} = useContext(PropertiesContext)
    let history = useHistory();

    const [current, setCurrent] = useState(0)
    const length = properties.length

    function nextSlide() {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    function prevSlide() {
        setCurrent(current === 0 ? length - 1: current - 1)
    }

    if(!Array.isArray(properties) || properties.length <= 0) {
        return null;
    }

    if (!user) return history.push("/signup")

    return(
        <div className="homepage">
            <div className="homeDiv">
                <h1 className="intro_header">Housing +</h1>
                <h4 className="intro_body">Your source for vacation rental homes</h4>
            </div>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {properties.map((property, index) => {
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && (<img src={property.image_url} alt={property.id} className="image_home"/>)}
                        </div>
                    )
                    })}
            </section>
        </div>
    )
}

export default Home;