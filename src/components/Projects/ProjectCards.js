import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BiLinkExternal } from 'react-icons/bi'

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
      />

      <Card.Body>

        <Card.Title
          style={{
            fontWeight: '700',
            fontSize: '1.6rem',
            textAlign: 'center',
            color: '#c770f0',
            marginBottom: '18px',
            letterSpacing: '0.5px'
          }}
        >
          {props.title}
        </Card.Title>

        <Card.Text style={{ textAlign: 'center' }}>
          {props.description}
        </Card.Text>

        <div
          style={{
            display: 'flex',
            justifyContent: props.liveLink
              ? 'space-between'
              : 'center',
          }}
        >
          <Button
            variant="primary"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? 'View Blog' : 'View Project'}
          </Button>

          {props.liveLink && (
            <Button
              variant="primary"
              href={props.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLinkExternal /> &nbsp; Live
            </Button>
          )}

        </div>

      </Card.Body>
    </Card>
  )
}

export default ProjectCards