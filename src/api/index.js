import axios from "axios";

// const postUrl = "http://localhost:8000/blogs";

export const fetchBlog = (url, source) => {
  try {
    return axios.get(url, {
      cancelToken: source.token,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log(`Error ${error.message}`);
    }
    return error;
  }
};

