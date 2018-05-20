import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

// ALL requests require a key parameter, eg `reduxblog.herokuapp.com/api/posts?key=123`
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = '?key=something12345';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
