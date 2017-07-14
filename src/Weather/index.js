import React, { Component } from 'react'
import WeatherShow from './show'
import FiveDay from './5day'

class Weather extends Component {

  constructor() {
    super()

    this.state = {
      city: {}
    }
  }

  componentWillMount() {
    this.fetchWeather()
  }

  fetchWeather() {
    fetch(`http://localhost:3000/api/v1/cities/${this.props.match.params.cityId}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        city: data['city']
      }))
  }

  render () {
    return (
      <div>
        <WeatherShow {...this.state.city} />
        <FiveDay />
      </div>
    )
  }
}

export default Weather
