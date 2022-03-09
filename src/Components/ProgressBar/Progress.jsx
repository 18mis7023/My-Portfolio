import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { SiJava,SiPython} from "react-icons/si";

function Progress(props) {
  return (
    <div className={props.classname}>
        <h4 className="colorP"><SiJava size={25}/> {props.name}</h4>
        <MDBProgress>
            <MDBProgressBar striped bgColor='success' width={props.score} valuemin={0} valuemax={100} />
      </MDBProgress>
    </div>
)
}

export default Progress