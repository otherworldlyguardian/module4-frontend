import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const UserForm = ({ handleSubmit, handleChange, username, password, type }) => (

  <Segment inverted>
    <Form inverted onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input name='username' value={username} placeholder='Username' onChange={handleChange} required />
        <Form.Input name='password' type='password' value={password} placeholder='Password' onChange={handleChange} required />
      </Form.Group>
      <Button type='submit'>{type}</Button>
    </Form>
  </Segment>

)

export default UserForm
