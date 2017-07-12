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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
          <LogInModal />
        </Menu.Item>
        <Menu.Item>
          <SignUpModal />
        </Menu.Item>
      </Menu>
    )
  }
}

export default WeatherMenu
