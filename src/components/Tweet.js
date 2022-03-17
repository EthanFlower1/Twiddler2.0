import Card from 'react-bootstrap/Card'
import React from 'react'




export default function Tweet (props) {

  const [isLiked, setIsLiked] = React.useState(false)
  const [hasCommented, setHasCommented] = React.useState(false)

  function liked(e, username) {
    setIsLiked( prevValue => !prevValue)
  }

  function commented (e, username) {
    setHasCommented( prevValue => !prevValue)
  }

  const element = <div className="icon-container">
    <i className="fa-solid fa-share"></i>
    <i className="fa-solid fa-retweet"></i>

    { isLiked ?
    <i className="fa-solid fa-heart" onClick={(e) => liked(e) }></i> :
    <i className="fa-regular fa-heart" onClick={(e) => liked(e) }></i>}

    { hasCommented ?
    <i className="fa-solid fa-comment" onClick={(e) => commented(e) }></i> :
    <i class="fa-regular fa-comment" onClick={(e) => commented(e) }></i>}
    </div>

  return (
    <Card className='tweetCard'>
    <Card.Header>{props.username}</Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {props.message}
        </p>
        <footer className="blockquote-footer">

          {props.timeStamp}
          {element}

        </footer>
      </blockquote>
    </Card.Body>
  </Card>
  )
}

