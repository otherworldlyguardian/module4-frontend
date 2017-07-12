import React, {Component} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class UserForm extends Component {

  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Segment inverted>
        <Form inverted onSubmit={this.props.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input name='username' value={this.state.username} placeholder='Username' onChange={this.handleChange} />
            <Form.Input name='password' value={this.state.password} placeholder='Password' onChange={this.handleChange} />
          </Form.Group>
          <Button type='submit'>{this.props.type}</Button>
        </Form>
      </Segment>
    )
  }
}

export default UserForm
