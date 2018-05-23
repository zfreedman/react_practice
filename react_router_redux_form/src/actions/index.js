import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";

// ALL requests require a key parameter, eg `reduxblog.herokuapp.com/api/posts?key=123`
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=something12345';

// action used for fetching posts
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// acting used for creating new posts
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}
