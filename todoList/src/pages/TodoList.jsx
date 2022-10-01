import React, { useState } from "react";
import Form from "../components/form/Form";
import Header from "../components/header/Header";
import Layout from "../components/layout/Layout";
import List from "../components/list/List";
//각 컴포넌트를import해서 불러온다 Todo리스트가 대장
// form은 값을입력,추가하는 것이다
//Header는 맨위에 nav바 이다
//Layout은 여기서작성한내용들이 레이아웃 컴포넌트에게 props.children으로전달됨,내부에 작성된 내용들을 화면에표시함
//props.children은 주로 자식 컴포넌트 또는 html 엘리먼트가 어떻게 구성되어있는지 모르는데, 화면에 표시해야 하는 경우 사용합니다.
//List 는 할일의리스트 들을 보여주는것이다

//TOdoList 에Usestate만들고 그안에있는 객체들을 자유자재 바꿀수잇다 각각구분할수있게 아이디를주고 완료 했는지안했는지 구분할수있게
//만들어준다
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부 어려움",
      body: "리액트 삭제를 공부해봅시다",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
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
