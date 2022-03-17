import Navbar from 'react-bootstrap/navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/nav';


export default function Header (props) {
  return (
    <div className="nav--container">
     <Navbar  bg="primary" variant="dark">
        <Container>
        <div className='logo' href="#home"> <span className='enlarger'>🦄</span>Twiddler 2.0</div>
        <Nav className="me-auto">
          <Nav.Link onClick={(e) => props.clickHandler(e, 'home')} className="spacer" >HomeFeed</Nav.Link>
          <Nav.Link onClick={(e) => props.clickHandler(e, 'friendsList')} className="spacer" >FriendsList</Nav.Link>
          <Nav.Link className="spacer" href="https://youtu.be/dQw4w9WgXcQ"> News </Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </div>
  )
}