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
    if (this.props.match.url.includes('5day')) {
      return <FiveDay {...this.state.city} />
    } else {
      return <WeatherShow {...this.state.city} />
    }
  }
}

export default Weather
