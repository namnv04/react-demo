
export const getPosts = (state) => {
  try {
    return state.posts
  } catch (e) {
    return [];
  }
}
