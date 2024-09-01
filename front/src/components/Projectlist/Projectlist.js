import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import useradminpanel from "../../Assets/OnRouteWeb.jpg";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col
            //</Row>md={4} className="project-card"
            >
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="OnRoute"
                description="Sistema compuesto por aplicación multiplataforma móvil, web y dispositivo de escaneo para mejorar la gestión de información de ubicaciones de la empresa MARS Petcare "
                ghLink="#"
              />
            </Col>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col>
                <ProjectCard
                  imgPath={useradminpanel}
                  isBlog={false}
                  title="SGRP"
                  description="Primera versión del gestor de rutas y puntos de ventas para MARS desarrollado en tecnologias web como PHP, HTML y CSS,
                  aprovechando la API de Mapas de Google para obtener la localización en tiempo real"
                  ghLink="#"
                />
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
