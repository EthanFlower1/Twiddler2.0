import Friend from './Friend';
import Button from 'react-bootstrap/button'

export default function FriendsList (props) {
    const friends = props.friendsArray.map( person => <Friend key={person.id} username={person.username} profilePicture={person.profilePicture} />)

  return (
    <section>
       <Button onClick={(e) => props.clickHandler(e, 'home')}  className="back" variant="primary">Back</Button>
    <div className="friends-list">
      <h2>Friend's List:</h2>
      {friends}
    </div>
    </section>
  )
}