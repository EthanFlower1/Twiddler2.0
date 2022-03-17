
export default function Friend (props) {
  console.log(props.profilePicture)
  return (
    <div className="friend">

      <img src={props.profilePicture} />
      <h3 className="username">{props.username}</h3>
    </div>
    )
}