import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Posts from './components/posts'
import PostDetails from './components/postdetails'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Turner :)</h1>
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
