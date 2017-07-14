import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import WeatherMenu from './Menu/index'
import Home from './Home/index'
import Cities from './Cities/index'
import Weather from './Weather/index'
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/api/v1/cities' component={Cities} />
            <Route exact path='/api/v1/cities/:cityId' component={Weather} />
            <Route exact path='/api/v1/cities/:cityId/5day' component={Weather} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
