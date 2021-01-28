import React, { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../../actions/useFetch";
import axios from "axios";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  const handleDelete = async () => {
    try {
      const data = await axios.delete(`http://localhost:8000/blogs/${id}`);
      console.log("Data Deleted", data);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
