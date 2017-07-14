import React, { Component } from 'react'
import CityList from './CityList'
import Search from './Search'

class Cities extends Component {
  constructor () {
    super()

    this.state = {
      cities: [],
      searchTerm: ''
    }
  }

  componentWillMount() {
    this.fetchCities()
  }

  fetchCities() {
    fetch('http://localhost:3000/api/v1/cities')
      .then(res => res.json())
      .then(data => this.setState({
        cities: data['cities']
      }))
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterCities () {
    return this.state.searchTerm.length > 2 ?
    this.state.cities.filter(city => city.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) :
    []
  }

  render() {
    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <CityList cities={this.filterCities()} />
      </div>
    )
  }
}

export default Cities
