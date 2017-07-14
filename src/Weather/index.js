import React, { Component } from 'react'
import WeatherShow from './show'

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
      <WeatherShow {...this.state.city} />
    )
  }
}

export default Weather
