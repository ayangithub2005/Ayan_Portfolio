import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiMysql
} from "react-icons/si";

import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p style={{fontSize:'14px', marginTop:'10px'}}>VS Code</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{fontSize:'14px', marginTop:'10px'}}>Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize:'14px', marginTop:'10px'}}>GitHub</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <p style={{fontSize:'14px', marginTop:'10px'}}>MySQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
        <p style={{fontSize:'14px', marginTop:'10px'}}>Vercel</p>
      </Col>

    </Row>
  );
}

export default Toolstack;