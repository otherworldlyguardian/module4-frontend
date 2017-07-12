import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const UserForm = (props) => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input placeholder='Username' />
        <Form.Input placeholder='Password' />
      </Form.Group>
      <Button type='submit'>{props.type}</Button>
    </Form>
  </Segment>
)

export default UserForm
