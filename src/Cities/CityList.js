import React from 'react'
import { Table } from 'semantic-ui-react'
import City from './City'

const CityList = ({ cities }) => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>ID</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {cities.map(city => <City {...city} key={city.id} /> )}
    </Table.Body>
  </Table>
)

export default CityList
