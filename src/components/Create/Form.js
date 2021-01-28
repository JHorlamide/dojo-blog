import React, { useState } from "react";

const Form = () => {
  const [blog, setBlog] = useState({
    author: "",
    title: "",
    body: "",
  });

  const handleSubmit = () => {
    setBlog(blog);
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="" method="post">
        <label htmlFor="" for="author">
          Author
        </label>
        <input
          type="text"
          name="author"
          id="author"
          value=""
          placeholder="Enter your name"
        />

        <label htmlFor="" for="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value=""
          placeholder="Enter you blog title"
        />

        <label htmlFor="" for="body">
          Body
        </label>
        <textarea name="body" id="body" cols="30" rows="10" value=""></textarea>
        <button type="submit" onClick={handleSubmit}>Create Post</button>
      </form>
    </div>
  );
};

export default Form;
