import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import "./CCard.css";
import { SiGithub,SiGmail} from "react-icons/si";
import { CgProfile} from "react-icons/cg";

function CCard(props) {
  return (
    <div>
        <MDBCard className='heightNone'>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={props.imgurl} fluid alt='...' />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody className='colorB'>
                <MDBCardTitle><strong>{props.author}</strong></MDBCardTitle>
                <MDBCardText>
                    <MDBRow>
                        <MDBCol size='4' className='hoverAnimate'>
                            <a href={props.github} target="_blank"><SiGithub size='1.5em' className='colorB m-2'/></a>
                        </MDBCol>
                        <MDBCol size='4' className='hoverAnimate'>
                            <a href={props.mail} target="_blank"><SiGmail size='1.5em' className='colorB m-2'/></a>
                        </MDBCol>
                        <MDBCol size='4' className='hoverAnimate'>
                            <a href={props.portfolio} target="_blank"><CgProfile size='1.5em' className='colorB m-2'/></a>
                        </MDBCol>
                    </MDBRow>
                </MDBCardText>
            </MDBCardBody>
        </MDBCard>
    </div>
  )
}

export default CCard