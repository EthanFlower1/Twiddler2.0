import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function TweetForm (props) {


  return (
    <div className="tweet--form">
        <Form >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>UserName:</Form.Label>
        <Form.Control type="text" onChange={ (e) => props.onChange(e, 'username' )} placeholder="@SuperDev" value={ props.formData.username } />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message:</Form.Label>
        <Form.Control onChange={(e) => props.onChange(e, 'message') } value={ props.formData.message } placeholder="'Today, I bought avocado toast and a oatmilk Latte ☕️🙊' " as="textarea" rows={3} />
      </Form.Group>
      <Button onClick={(e) => props.submitHandler(e) } className="submit" variant="primary">Post</Button>
    </Form>
    </div>
  )
}