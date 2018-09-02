
import axios from 'axios'
import {
  SEARCH_POSTS
} from './posts.actionTypes'
let _ = require('lodash')

const searchPostDebounce = _.debounce(async (string, dispatch) => {
  try {
    let url = process.env.REACT_APP_STAGE === 'dev' ? 'http://localhost:3000' : 'https://mysterious-scrubland-94044.herokuapp.com'
    const res = await axios.get(`${url}/posts?titleName=${string}`)
    let posts = res.data ? res.data : []
    dispatch({
      type: SEARCH_POSTS,
      payload: {
        items: posts,
        searchString: string,
        isSearching: false
      }
    })
  } catch (error) {
  }
}, 500)

export const searchPosts = (string) => (dispatch) => {
  let isSearching = true
  if (!string) {
    isSearching = false
  }
  dispatch({
    type: SEARCH_POSTS,
    payload: {
      items: [],
      searchString: string,
      isSearching
    }
  })
  if (!string) {
    searchPostDebounce.cancel()
    return
  }
  searchPostDebounce(string, dispatch)
}
