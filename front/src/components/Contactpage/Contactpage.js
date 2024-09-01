import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";

function Contactpage() {
  function EmailButton() {
    const sendEmail = () => {
      window.open(
        "mailto:hector.galarza.css@gmail.com?subject=Contacto a MIDAH Subject&body="
      );
    };

    return (
      <button className="contactbtn" onClick={sendEmail}>
        Contactanos
      </button>
    );
  }
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Contactanos</h2>
        <p className="contactpara"> Tu opinion es importante!</p>
        <EmailButton/>
        <span></span>
        <hr className="line" />
        <p className="copyright">
          © Copyright 2023.
          <br />
          Designed & Built by <span>MIDAH</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;
