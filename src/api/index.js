import axios from "axios";

// const url = "http://localhost:8000/blogs";

export const fetchBlog = async (url, source) => {
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
