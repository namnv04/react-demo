import React, { Component } from 'react'
import './posts.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  searchPosts
} from './posts.actions'
import {
  getPosts,
} from './posts.selectors'

class Posts extends Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange = async (string) => {
    await this.props.searchPosts(string)
  }
  handleSubmit (e) {
    e.preventDefault()
  }
  render () {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Search by Title:
            <input autoFocus="true" placeholder="Type to search" type="text" value={this.props.posts.searchString} onChange={e => {this.handleChange(e.target.value)}} />
          </label>
        </form>

        <div className="content">
          {(this.props.posts.isSearching) &&
            "Searching..."
          }
          {(this.props.posts.isSearching === false && this.props.posts.searchString !== '' && this.props.posts.items.length === 0) &&
            "No result"
          }

          <div className="list-posts">
            {this.props.posts.items.map((post, index) => (
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

const mapStateToProps = state => ({
  posts: getPosts(state)
})

const mapDispatchToProps = {
  searchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
