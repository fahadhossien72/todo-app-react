import React, { useState } from "react";
import Todos from "./Todos";
import style from "../assets/css/home.module.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

// const dummyTodos = [
//   {
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 desc",
//   },
//   {
//     id: 2,
//     title: "todo title 2",
//     desc: "todo2 desc",
//   },
//   {
//     id: 3,
//     title: "todo title 3",
//     desc: "todo3 desc",
//   },
// ];

const Home = () => {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => {
      const filterTodos = prevTodos.filter((todo) => todo.id !== id);
      return filterTodos;
    });
  };
  return (
    <div className={style.container}>
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo handleAddTodo={handleAddTodo} />
      <Todos todos={todos} handleRemoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default Home;
