import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import WeatherMenu from './Menu/index'
import Cities from './Cities/index'

class App extends Component {
  constructor () {
    super()
  }


  render() {
    return (
      <Router>
        <div>
          <WeatherMenu />
          <Route to='/api/v1/cities' component={Cities} />
        </div>
      </Router>
    )
  }
}

export default App
