import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  console.log("Fetch Data");
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const createPost = async (post) => {
  const response = await axios.post(`${BASE_URL}/posts`, post);
  return response.data;
};
