import React, { Component } from 'react'
import { Table, Sidebar, Segment, Menu, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class City extends Component {
  constructor () {
    super()

    this.state = {
      visible: false
    }
  }

  turnOn = (e) => this.setState({ visible: true })

  turnOff = () => this.setState({ visible: false })

  render () {
    const { visible } = this.state
    return (
      <Table.Row>
        <Table.Cell>
          <Sidebar.Pushable as={Segment}>
            <Sidebar as={Menu} animation='overlay' direction='right' width='very wide' visible={visible} inverted>
              <Menu.Item
                as={Link}
                to={`/api/v1/cities/${this.props.owm_id}`}
              >
                Current Weather
              </Menu.Item>
              <Menu.Item
                as={Link}
                to={`/api/v1/cities/${this.props.owm_id}/5day`}
              >
                Hourly Weather
              </Menu.Item>
              <Menu.Item>
                5-day Forecast
              </Menu.Item>
              <Menu.Item onClick={this.turnOff}>
                <Icon name='chevron right' />
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic onClick={this.turnOn}>
                <Popup
                  trigger={<span>{this.props.name}</span>}
                  content={<iframe
                    title={this.props.owm_id}
                    src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyB9ynrswXrhclz_8aBtYc7UjDRxOO-zdds&center=${this.props.lat},${this.props.lon}&zoom=13&maptype=satellite`}
                    width="400"
                    height="300"
                    frameBorder="0"
                    allowFullScreen
                  />}
                  position='right center'
                />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Table.Cell>
        <Table.Cell>{this.props.owm_id}</Table.Cell>
      </Table.Row>
    )
  }
}

export default City
