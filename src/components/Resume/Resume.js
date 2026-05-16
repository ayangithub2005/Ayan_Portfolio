import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";
import pdf from "../../Assets/Ayan_Kuila_CV.pdf";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container>

        {/* Download Button Top */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row
          className="resume"
          style={{ justifyContent: "center" }}
        >
          <Col md={8} className="resume-right">

            <h3 className="resume-title">Education</h3>

            <Resumecontent
              title="Bachelor of Technology: Computer Science & Engineering [Techno Main Salt Lake]"
              date="2023 – Expected 2027"
              content={[
                "University: MAKAUT (Maulana Abul Kalam Azad University of Technology)",
                "College: Techno Main Salt Lake",
                "Current CGPA: 6.4 (Till 5th Semester)",
                "Current Semester: 5th Semester",
                "Focused on Artificial Intelligence, Web Development and Data Structures & Algorithms",
                "Actively building projects and improving problem-solving skills"
              ]}
            />

            <Resumecontent
              title="12th - Higher Secondary (WBCHSE)"
              date="2023"
              content={[
                "Khukurdaha I.C.M.M High School, West Bengal",
                "Final Percentage: 68%",
                "Completed Higher Secondary education with Science background"
              ]}
            />

            <Resumecontent
              title="10th - Secondary Education (WBBSE)"
              date="2021"
              content={[
                "Panskura Bradley Birt High School, West Bengal",
                "Final Percentage: 88%",
                "Built strong academic foundation and interest in technology"
              ]}
            />

          </Col>
        </Row>

        {/* Download Button Bottom */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

      </Container>
    </Container>
  );
}

export default Resume;