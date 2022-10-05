import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "아이디 1번",
      body: "아이디 1번 입니다.",
      isDone: false,
    },
    {
      id: 2,
      title: "아이디 2번입니다.",
      body: "아이디 2번 입니다.",
      isDone: true,
    },
  ]);

  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
