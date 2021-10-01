import React from 'react'
import "./Card.css"
function Card(props) {
    return (
        <div className="card" data-aos="fade-down-right" >
            {props.icon}
            <p className="cardtitle ctitle" >{props.title}</p>
            <p className="cardtitle" >{props.description}</p>
        </div>
    )   
}

export default Card
