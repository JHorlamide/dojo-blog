import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const [createBlog, setCreateBlog] = useState({
    title: "",
    body: "",
    author: "",
  });

  const { title, body, author } = createBlog;

  const onChange = (e) => {
    return setCreateBlog({
      ...createBlog,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      setIsPending(true);

      const res = await axios.post(
        "http://localhost:8000/blogs",
        {
          title,
          body,
          author,
        },
        config
      );

      console.log(`New blog added: ${res}`);
      setIsPending(false);
      history.push("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={onSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          required
          onChange={onChange}
        />

        <label>Blog Body:</label>
        <textarea
          name="body"
          value={body}
          onChange={onChange}
          required
        ></textarea>

        <label>Blog Author:</label>
        <select name="author" value={author} onChange={onChange} required>
          <option value="Olamide">Olamide</option>
          <option value="Jubril">Jubril</option>
          <option value="JHorlamide">JHorlamide</option>
          <option value="Horlamide">Horlamide</option>
        </select>

        {!isPending && <button type="submit">Add Blog</button>}
        {isPending && <button type="submit">Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Form;
