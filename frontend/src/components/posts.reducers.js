import {
  SEARCH_POSTS
} from './posts.actionTypes'

const initialState = {
  items: [],
  searchString: ''
}
export default (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case SEARCH_POSTS:
      nextState = updatePosts(state, action)
      break
    default:
      break
  }
  return nextState || state
}

const updatePosts = (state, action) => {
  return {...state, ...action.payload}
}