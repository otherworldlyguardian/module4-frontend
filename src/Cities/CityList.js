import React from 'react'
import { Table } from 'semantic-ui-react'
import City from './City'

const CityList = ({ cities }) => {
    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Temperature</Table.HeaderCell>
            <Table.HeaderCell>Last Updated</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map(city => <City key={city.id} {...city} /> )}
        </Table.Body>
      </Table>
    )
}

export default CityList
