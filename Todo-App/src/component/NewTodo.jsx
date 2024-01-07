import React, { useState } from "react";
import style from "../assets/css/newtodo.module.css";

const NewTodo = (props) => {
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const { title, desc } = data;

  const inputChange = (property, value) => {
    setData((prevData) => ({
      ...prevData,
      [property]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddTodo(data);
    setData({ title: "", desc: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style["form-field"]}>
          <label htmlFor="title">Title:</label>
          <input
            onChange={(e) => {
              inputChange("title", e.target.value);
            }}
            value={title}
            type="text"
            id="title"
            name="title"
          />
        </div>
        <div className={style["form-field"]}>
          <label htmlFor="desc">Title:</label>
          <textarea
            onChange={(e) => {
              inputChange("desc", e.target.value);
            }}
            value={desc}
            name="desc"
            type="text"
            id="desc"
          ></textarea>
        </div>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
