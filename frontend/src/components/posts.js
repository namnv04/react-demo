import React, { Component } from 'react'
import './posts.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
let _ = require('lodash')


class Posts extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSearching: false,
      searchString: '',
      posts: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = (string) => {
    this.setState({searchString: string, posts: []});
    if (!string) {
      this.setState({posts: [], isSearching: false})
      return
    }

    this.setState({isSearching: true});
    this.searchPosts(string)
  }
  handleSubmit (e) {
    e.preventDefault()
  }
  searchPosts = _.debounce(async (string) => {
    try {
      let res = await axios.get(`http://localhost:3000/posts?titleName=${string}`)
      let posts = res.data ? res.data : []
      this.setState({posts, isSearching: false})
    } catch (error) {
    }
  }, 500)
  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search by Title:
            <input autoFocus="true" placeholder="Type to search" type="text" value={this.state.searchString} onChange={e => {this.handleChange(e.target.value)}} />
          </label>
        </form>

        <div className="content">
          {(this.state.isSearching) &&
            "Searching..."
          }
          {(this.state.isSearching === false && this.state.searchString !== '' && this.state.posts.length === 0) &&
            "No result"
          }

          <div className="list-posts">
            {this.state.posts.map((post, index) => (
              <div className="item" key={index}>
                {post.TitleName} ({post.ReleaseYear}) -
                <Link to={`post/${post._id}`}>View Details</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Posts
