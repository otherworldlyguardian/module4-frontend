import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { LogInModal, SignUpModal } from './Modal'


class WeatherMenu extends Component {
  constructor () {
    super()

    this.state = {
      activeItem: 'home',
      username: '',
      password: ''
    }

    this.base_url = 'http://localhost:3000/api/v1/'
  }

  handleItemClick = (e) => this.setState({ activeItem: e.target.name })

  handleChange = (e) => this.setState({[e.target.name]: e.target.value})

  handleLogIn = (e) => {
    this.props.login({username: this.state.username, password: this.state.password})

    this.setState({
      username: '',
      password: ''
    })
  }

  handleSignUp = (e) => {
    e.preventDefault()
    fetch(this.base_url + 'users', {
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
    .then(data => console.log(data))

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu color='teal' inverted>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          as={NavLink}
          to={'/api/v1/cities'}
          name='Cities'
          active={activeItem === 'Cities'}
          onClick={this.handleItemClick}
        />
        <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
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

export default WeatherMenu
