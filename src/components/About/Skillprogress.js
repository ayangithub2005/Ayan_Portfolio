import React from "react";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";

function SkillProgress() {
  return (
    <Container style={{ paddingTop: "50px", paddingBottom: "50px" }}>
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "50px",
        }}
      >
        My <span className="purple">Skills</span>
      </h1>

      <Row>

        <Col md={6}>
          <h5 style={{ color: "white" }}>C++</h5>
          <ProgressBar now={80} label="80%" />

          <br />

          <h5 style={{ color: "white" }}>Java</h5>
          <ProgressBar now={70} label="70%" />

          <br />

          <h5 style={{ color: "white" }}>HTML</h5>
          <ProgressBar now={85} label="85%" />

          <br />

          <h5 style={{ color: "white" }}>CSS</h5>
          <ProgressBar now={75} label="70%" />
        </Col>

        <Col md={6}>
          <h5 style={{ color: "white" }}>JavaScript</h5>
          <ProgressBar now={60} label="60%" />

          <br />

          <h5 style={{ color: "white" }}>Python</h5>
          <ProgressBar now={60} label="60%" />

          <br />

          <h5 style={{ color: "white" }}>Git/GitHub</h5>
          <ProgressBar now={65} label="65%" />

          <br />

          <h5 style={{ color: "white" }}>MySQL</h5>
          <ProgressBar now={60} label="60%" />
        </Col>

      </Row>
    </Container>
  );
}

export default SkillProgress;