import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import WeatherMenu from './Menu/index'
import Home from './Home/index'
import Cities from './Cities/index'
import AuthAdapter from './AuthAdapter'

class App extends Component {
  constructor () {
    super()

    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }

  componentWillMount() {
    if(localStorage.getItem('jwt')) {
      AuthAdapter.currentUser()
      .then(user => {
        if(!user.error) {
          this.setState({isLoggedIn: true, user: user})
        }
      })
    }
  }

  login = (loginParams) => {
    AuthAdapter.login(loginParams)
    .then(user => {
      if (!user.error) {
        this.setState({isLoggedIn: true, user: user})
        localStorage.setItem('jwt', user.jwt)
      }
    })
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.setState({isLoggedIn: false, user: {}})
  }

  render() {
    return (
      <Router>
        <div>
          <WeatherMenu login={this.login} logout={this.logout} {...this.state}/>
          <Route exact to='/' component={Home} />
          <Route exact to='/api/v1/cities' component={Cities} />
        </div>
      </Router>
    )
  }
}

export default App
