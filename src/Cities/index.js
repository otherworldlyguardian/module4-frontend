import React, { Component } from 'react'

class Cities extends Component {
  constructor () {
    super()

    this.state = {
      cities: []
    }
  }

  componentWillMount() {
    this.fetchCities()
  }

  fetchCities() {
    fetch('http://localhost:3000/api/v1/cities')
    .then(res => res.json)
    .then(data => this.setState({
      cities: data['cities']
    }))
  }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div />
    )
  }
}

export default Cities
