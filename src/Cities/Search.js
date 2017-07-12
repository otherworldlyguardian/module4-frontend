import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = (props) => {
  return (
    <Input
      fluid icon='search'
      placeholder='Type at least three letters for results...'
      value={props.searchTerm}
      onChange={props.handleChange}
    />
  )
}

export default Search
