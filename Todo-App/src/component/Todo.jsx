import React, { startTransition } from "react";
import style from "../assets/css/todo.module.css";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = () => {
    props.handleRemoveTodo(id);
  };
  return (
    <article className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <button
        className={style.btn}
        onClick={() => {
          handleClick(id);
        }}
      >
        <i className="fa fa-trash fa-2x" />
      </button>
    </article>
  );
};

export default Todo;
