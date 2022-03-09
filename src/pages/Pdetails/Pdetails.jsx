import React from 'react'
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import "./Pdetails.css";
import { SiGithub,SiGmail} from "react-icons/si";
import { CgProfile} from "react-icons/cg";
import "../../Components/CCard/CCard"
import CCard from '../../Components/CCard/CCard';

function Pdetails() {
  return (
    <div className='colorW fontCursive'>
        <MDBRow className='mb-4 center itemsCenter'>
            <MDBCol size='10' xxl='4' xl='4' lg='4' md='4' sm='10' className='m-5 pt-3'>
            <img
                src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                className='img-fluid roundedImage hover-shadow'
                alt=''
                style={{ alignItems: 'center' }}
                />
            </MDBCol>
            <MDBCol size='10' xxl='6' xl='6' lg='6' md='6' sm='10' className='mt-5 pt-4 fsizeBig'>
                <MDBRow className='p-2'>
                    <MDBCol size='4 p-0'>
                        Project Title :
                    </MDBCol>
                    <MDBCol size='6' className='textLeft'>
                        <strong>
                            ClipNow
                        </strong>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='p-2'>
                    <MDBCol size='4 p-0'>
                        Source Code :
                    </MDBCol>
                    <MDBCol size='6' className='fsizeSmall textLeft'>
                        <strong>
                            <a href='http://localhost:3000/'>http://localhost:3000/</a>
                        </strong>
                    </MDBCol>
                </MDBRow>
                <MDBRow className='p-2 '>
                    <MDBCol size='4 p-0'>
                        Live Demo :
                    </MDBCol>
                    <MDBCol size='6' className='fsizeSmall textLeft'>
                        <strong>
                            <a href='http://localhost:3000/'>http://localhost:3000/</a>
                        </strong>
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol className='mLR'>
                <h1><strong>Description</strong></h1>
                <p className='m-3'>
                Etiam facilisis non felis eu semper. Donec vitae odio sit amet est suscipit euismod. Morbi orci quam, imperdiet in mollis eu, placerat sit amet elit. Proin nec sodales libero. Nunc vel est id erat auctor tincidunt. In sit amet ullamcorper nunc, non placerat purus. Phasellus egestas nunc vel turpis dapibus, ut commodo arcu hendrerit. Praesent velit lorem, ullamcorper quis lectus sit amet, cursus molestie urna. Vestibulum finibus, velit nec condimentum volutpat, sem enim sollicitudin massa, in molestie ipsum ipsum id ante. Aliquam erat volutpat. Suspendisse nec massa eu ex semper tincidunt vitae eu nisi. Suspendisse volutpat odio vitae lacus blandit maximus. Praesent orci eros, interdum iaculis eros ut, porta dapibus nunc. Sed malesuada lorem eu neque feugiat, nec ultricies enim eleifend. Morbi sit amet enim faucibus urna tincidunt euismod et id ex.
                </p>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol className='mLR'>
                <h1><strong>Languages && Skills</strong></h1>
                <p className='m-3'>
                    Languages are kept here with the logos
                </p>
            </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol className='mLR'>
                <h1><strong>Contributors</strong></h1>
                <MDBRow>
                    <MDBCol size='4' md='6' sm='6' className='mLR mTB'>
                        {/* <MDBCard className='heightNone'>
                            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                                <a>
                                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                                </a>
                            </MDBRipple>
                            <MDBCardBody className='colorB'>
                                <MDBCardTitle><strong>K.Hemanth Chowdary</strong></MDBCardTitle>
                                <MDBCardText>
                                    <MDBRow>
                                        <MDBCol size='4' className='hoverAnimate'>
                                            <a href='https://github.com/18mis7023' target="_blank"><SiGithub size='1.5em' className='colorB m-2'/></a>
                                        </MDBCol>
                                        <MDBCol size='4' className='hoverAnimate'>
                                            <SiGmail size='1.5em' className='colorB m-2'/>
                                        </MDBCol>
                                        <MDBCol size='4' className='hoverAnimate'>
                                            <CgProfile size='1.5em' className='colorB m-2'/>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardText>
                                <MDBBtn href='#'>Button</MDBBtn>
                            </MDBCardBody>
                        </MDBCard> */}
                        <CCard 
                            imgurl='https://mdbootstrap.com/img/new/standard/nature/111.webp'
                            author='K.Hemanth Chowdary'
                            github='https://github.com/18mis7023'
                            mail="mailto:kodalihemanthchowdary4@gmail.com"
                            portfolio="https://kodalihemanthchowdary.netlify.app/"
                        />

                    </MDBCol>
                    <MDBCol className='mLR'>
                        
                    </MDBCol>
                    <MDBCol className='mLR'>

                    </MDBCol>
                    <MDBCol className='mLR'>

                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    </div>
  )
}

export default Pdetails