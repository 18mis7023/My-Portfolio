import React from "react";
import "./PCard.css";

function PCard(props) {
  return (
    <div className="pcard">
      {props.icon}
      <p className="pcardtitle pctitle">{props.title}</p>
      <p className="pcardtitle">{props.description}</p>
      <div className="pcard_stack_div" >
        {props.stack.map((item, idx) => (
          <span data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">{item}</span>
        ))}
      </div>
      <div class="btncontainer tc">
        <a class="rainbow rainbow-1" href={props.sourcelink} target="_blank">CheckOut <span className="">{props.source}</span></a>
      </div>
    </div>
  );
}

export default PCard;
