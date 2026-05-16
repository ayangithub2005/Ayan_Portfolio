import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import {FaJava} from 'react-icons/fa'
import {
  DiJavascript1,
  DiPython,
  DiGit,
  DiHtml5,
  DiCss3,
} from 'react-icons/di'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>

      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <p style={{fontSize:'14px', marginTop:'10px'}}>C++</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <p style={{fontSize:'14px', marginTop:'10px'}}>Java</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <p style={{fontSize:'14px', marginTop:'10px'}}>HTML</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p style={{fontSize:'14px', marginTop:'10px'}}>CSS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize:'14px', marginTop:'10px'}}>JavaScript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{fontSize:'14px', marginTop:'10px'}}>Python</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize:'14px', marginTop:'10px'}}>Git</p>
      </Col>

    </Row>
  )
}

export default Techstack