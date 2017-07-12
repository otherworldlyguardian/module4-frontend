import React from 'react'
import { Table } from 'semantic-ui-react'

const City = (props) => {
    return (
      <Table.Row>
        <Table.Cell>{props.name}</Table.Cell>
        <Table.Cell>{props.owm_id}</Table.Cell>
        <Table.Cell>{props.temp}</Table.Cell>
        <Table.Cell>{props.updated_at}</Table.Cell>
      </Table.Row>
    )
}

export default City
