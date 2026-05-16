import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am{' '}
            <span className="purple">Ayan Kuila </span>
            from <span className="purple">West Bengal, India.</span>

            <br />
            I am currently a 5th Semester Computer Science Engineering student.

            <br />
            <br />

            I am passionate about programming, Artificial Intelligence,
            Web Development and continuously learning new technologies.

            <br />
            <br />

            Apart from coding, some other activities that I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>

            <li className="about-activity">
              <ImPointRight /> Watching tech videos and learning new skills
            </li>

            <li className="about-activity">
              <ImPointRight /> Playing strategy and story-based games
            </li>

            <li className="about-activity">
              <ImPointRight /> Watching movies and web series
            </li>
          </ul>

          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "Stay hungry, stay foolish."
          </p>

          <footer className="blockquote-footer">
            Steve Jobs
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard