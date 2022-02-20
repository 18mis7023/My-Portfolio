import React from "react";
import './contactus.css';

const ContactUs = () => {

  return (
    <section id="contact" data-aos="flip-up"  data-aos-delay="500">
        
        <div class="contact-box">
          
          <div class="contact-links">
            <h2 class="cnt">CONTACT ME?</h2>
            <div class="links">
              <div class="link">
                <a><img class="imgl" src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
              </div>
              <div class="link">
                <a><img class="imgl" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
              </div>
              <div class="link">
                <a><img class="imgl"  src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
              </div>
              <div class="link">
                <a><img class="imgl" class="imgl" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper">
            <form>
              <div class="form-item">
                <input type="text" name="sender" required/>
                <label>Name:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required/>
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button class="submit-btn">Send</button>  
            </form>
          </div>

        </div>

    </section>
  );
};

export default ContactUs;
