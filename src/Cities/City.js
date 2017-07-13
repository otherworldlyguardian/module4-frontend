import React from 'react'
import { Table, Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class City extends React.Component {
  constructor () {
    super()

    this.state = {
      visible: false
    }
  }

  turnOn = () => this.setState({ visible: true })

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
              <Menu.Item>
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
                {this.props.name}
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
