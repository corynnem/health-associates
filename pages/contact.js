import React from "react";
import Navigation from "./Nav/Navigation";
import Title from "./ResusableComponents/Title";
import Footer from "./ResusableComponents/Footer";

const Contact = () => {

  const submit = () => {
    if(window.location.href === 'https://formspree.io/thanks?language=en'){ 
        window.location.assign('https://health-associates.herokuapp.com/formsubmitted')
    }
  }



  return (
    <div>
      <Navigation />
      <div>
        <Title pageName={"Contact"} />
        {/* <img src={separator.src} className="separator"  alt='A line icon separating the title from the rest of the text on the page' /> */}
      </div>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "100px",
          //   marginLeft: "100px",
          textAlign: "center",
          fontFamily: "Niramit",
        }}
      >
        <h2 style={{ paddingLeft: "70px", paddingRight: "70px" }}>
          Contact Us Today!
        </h2>




        <form
        id="fs-frm"
        name="complaint-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/xyyoeqea"
        method="post"
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          onSubmit={() => submit()}
      >
        <fieldset id="fs-frm-inputs" >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last"
            required=""
          />

          <input
            type="telephone"
            name="telephone"
            id="telephone"
            placeholder="(555) 555-5555"
          />
            </div>
         

          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="email@domain.tld"
            required=""
          />
        <br/> 
          <textarea
            rows="6"
            name="message"
            id="complaint"
            placeholder="To whom it may concern..."
            required=""
          ></textarea>
          <input
            type="hidden"
            name="_subject"
            id="email-subject"
            value="HA Contact Form"
          />
        </fieldset>
        <input type="submit" value="Send" id='main-button' />
      </form>
      </div>
      <div style={{ marginLeft: "32px" }}>
        <Footer style={{ marginLeft: "-32px" }}/>
      </div>
    </div>
  );
};

export default Contact;
