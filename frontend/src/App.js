import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Posts extends Component {
  render () {
    return (
      <div>
        <div>abc</div>
      </div>
    )
  }
}

class PostDetails extends Component {
  render () {
    return (
      <div>
        <div>Details</div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Reacts</h1>
          </header>
          <div className="App-intro">
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/:id" component={PostDetails} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
