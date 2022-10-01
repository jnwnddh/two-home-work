import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
//딜리트함수버튼 todos를 setTodos로 변환todos배열에서 todo.id 가 파라미터로 일치하지 않는 원소만 추출해서
//새로운 배열을 만듬=todo.id 가 id 인 것을 제거
function List({ todos, setTodos }) {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };
  //취소,완료
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. </h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! </h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
