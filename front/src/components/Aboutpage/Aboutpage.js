import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              Acerca de <span>Nosotros</span>
            </h3>
            <p className="aboutdetails">
              Major Intelligence Development Advance es una empresa que se
              especializa en desarrollo software de vanguardia a compañías de
              todos los tamaños con un equipo de expertos en el campo de la
              tecnología, se esfuerza por crear soluciones de que agilicen los
              procesos comerciales. Un 3 de mayo de 2022 en Durango, Durango,
              México; en la Universidad Tecnológica de Durango se tuvo como
              propuesta realizar un proyecto integrador en el cual se le tenía
              que dar solución con mano de la tecnología a un problema de la
              vida real. Galarza Carreño Héctor Fernando, Herrera Ruiz Adalid,
              León Quintana Graciela Irene, Santillán Ledesma María Fernanda y
              Torres Olivas Derek Omar son las personas que decidieron formar la
              empresa “MIDAH”.
            </p>
            {/* <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap 5</li>
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul> */}
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
