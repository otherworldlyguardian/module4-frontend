import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { LogInModal, SignUpModal } from './Modal'


class WeatherMenu extends Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleLogIn = (e) => {
    this.props.login({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  handleSignUp = (e) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: this.state.username,
          password: this.state.password
        }
      })
    })
    .then(resp => resp.json())
    .then(data => localStorage.setItem('jwt', data.jwt))
    this.props.login({
      username: this.state.username,
      password: this.state.password
    })
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <Menu color='teal' inverted>
          <Menu.Item
            as={NavLink}
            exact to={'/'}
            name='home'
          />
          <Menu.Item
            as={NavLink}
            to={'/api/v1/cities'}
            name='Cities'
          />
          <Menu.Item position='right'>
            Welcome, {this.props.user.username}!
          </Menu.Item>
          <Menu.Item>
            <Button onClick={this.props.logout}>Logout</Button>
          </Menu.Item>
        </Menu>
      )
    } else {
      return (
        <Menu color='teal' inverted>
          <Menu.Item
            as={NavLink}
            exact to={'/'}
            name='home'
          />
          <Menu.Item
            as={NavLink}
            to={'/api/v1/cities'}
            name='Cities'
          />
          <Menu.Item position='right'>
            <LogInModal {...this.state} handleChange={this.handleChange} handleSubmit={this.handleLogIn} />
          </Menu.Item>
          <Menu.Item>
            <SignUpModal {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSignUp} />
          </Menu.Item>
        </Menu>
      )
    }
  }
}

export default WeatherMenu
