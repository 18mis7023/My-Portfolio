import React from "react";
import './contactus.css';

const ContactUs = () => {

  return (
    <section id="contact" data-aos="flip-up"  data-aos-delay="500">
        
        <div className="contact-box">
          
          <div className="contact-links">
            <h2 className="cnt">CONTACT ME?</h2>
            <div className="links">
              <div className="link">
                <a><img className="imgl" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
              </div>
              <div className="link">
                <a><img className="imgl" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
              </div>
              <div className="link">
                <a><img className="imgl"  src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
              </div>
              <div className="link">
                <a><img className="imgl" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form>
              <div className="form-item">
                <input type="text" name="sender" required/>
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required/>
                <label>Email:</label>
              </div>
              <div className="form-item">
                <textarea className="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button className="submit-btn">Send</button>  
            </form>
          </div>

        </div>

    </section>
  );
};

export default ContactUs;
