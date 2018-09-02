import React, { Component } from 'react'
import './postdetails.css'
import axios from 'axios'

class PostDetails extends Component {
  constructor (props) {
    super(props)

    this.state = {
      post: {
        Awards: [],
        Genres: [],
        OtherNames: [],
        Participants: [],
        Storylines: []
      }
    }
  }
  async componentWillMount () {
    try {
      const { id } = this.props.match.params
      let url = process.env.REACT_APP_STAGE === 'dev' ? 'http://localhost:3000' : 'https://mysterious-scrubland-94044.herokuapp.com'
      let res = await axios.get(`${url}/post/${id}`)
      this.setState({post: res.data})
    } catch (error) {
    }
  }
  render () {
    return (
      <div className="container">
        <div className="content">
          {this.state.post.TitleName &&
          <h1>{this.state.post.TitleName} ({this.state.post.ReleaseYear})</h1>}

          <h4>Storylines:</h4>
          {this.state.post.Storylines.map((item, index) => (
            <p key={index}>
              <b>{item.Type}</b>: {item.Description},&nbsp;
            </p>
          ))}

          <h4>Awards:</h4>
          {this.state.post.Awards.map((item, i) => (
            <span key={i}>
              {item.Award},&nbsp;
            </span>
          ))}

          <h4>Genres:</h4>
          {this.state.post.Genres.map((item, i) => (
            <span key={i}>
              {item},&nbsp;
            </span>
          ))}

          <h4>Other Names:</h4>
          {this.state.post.OtherNames.map((item, i) => (
            <span key={i}>
              {item.TitleName},&nbsp;
            </span>
          ))}
          <h4>Participants:</h4>
          {this.state.post.Participants.map((item, i) => (
            <span key={i}>
              {item.Name},&nbsp;
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default PostDetails
