import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillLinkedin
} from "react-icons/ai";

function Contact() {
  return (
    <Container
  fluid
  className="about-section"
  style={{ minHeight: "100vh" }}
>
      <Particle />

      <Container>
        <h1
          className="project-heading"
          style={{ paddingTop: "50px" }}
        >
          Contact <strong className="purple">Me</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingTop: "50px" }}>
          <Col md={8}>
            <Card className="quote-card-view">
              <Card.Body>

                <h3 style={{ color: "white" }}>
                  Let's Connect
                </h3>

                <br />

                <p style={{ color: "white" }}>
                  Feel free to reach out regarding projects,
                  collaborations or opportunities.
                </p>

                <br />

                <p style={{ color: "white" }}>
                  <AiOutlineMail /> Email:
                  workwithayankuila@gmai.com
                </p>

                <p style={{ color: "white" }}>
  <AiFillGithub /> GitHub:{" "}
  <a
    href="https://github.com/ayangithub2005"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#c770f0" }}
  >
    ayangithub2005
  </a>
</p>

<p style={{ color: "white" }}>
  <AiFillLinkedin /> LinkedIn:{" "}
  <a
    href="https://www.linkedin.com/in/ayankuila/"
    target="_blank"
    rel="noreferrer"
    style={{ color: "#c770f0" }}
  >
    Ayan Kuila
  </a>
</p>

                <p style={{ color: "white" }}>
                  📍 Kolkata, West Bengal, India
                </p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;