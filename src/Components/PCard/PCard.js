import React from "react";
import "./PCard.css";

function PCard(props) {
  return (
    <div className="pcard" data-aos="slide-right" >
      {props.icon}
      <p className="pcardtitle pctitle">{props.title}</p>
      <p className="pcardtitle">{props.description}</p>
      <div className="pcard_stack_div" >
        {props.stack.map((item, idx) => (
          <span>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default PCard;
