import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { LogInModal, SignUpModal } from './Modal'


class WeatherMenu extends Component {
  constructor () {
    super()

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e) => this.setState({ activeItem: e.target.name })

  handleLogIn = (e) => {
    e.preventDefault()
    alert('Login worked')
  }

  handleSignUp = (e) => {
    e.preventDefault()
    alert('Signup worked')
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
          <LogInModal handleSubmit={this.handleLogIn}/>
        </Menu.Item>
        <Menu.Item>
          <SignUpModal handleSubmit={this.handleSignUp} />
        </Menu.Item>
      </Menu>
    )
  }
}

export default WeatherMenu
