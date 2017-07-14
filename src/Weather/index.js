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
    if (this.props.match.url.includes('5day')) {
      this.fetch5day()
    } else {
      this.fetchWeather()
    }
  }

  fetchWeather() {
    fetch(`http://localhost:3000/api/v1/cities/${this.props.match.params.cityId}`)
      .then(resp => resp.json())
      .then(data => this.setState({
        city: data['city']
      }))
  }

  fetch5day() {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=${this.props.match.params.cityId}&appid=ae1ff8ec7a4faaabf1ef775f5a4957b2&units=imperial`)
      .then(resp => resp.json())
      .then(data => this.setState({
        city: data
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
