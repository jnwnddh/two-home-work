import React, { useState } from "react";
import "./style.css";

let number = 3;
// 1.맨처음에 Form을 추가한다 부모에게서todos란 props를 가져온다 그리고 initialState에 값을일단비워둔다
function Form({ setTodos, todos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);
  //2-1.todo,setTodo를 넣어주고 usestate에 위에있는값을넣어준다 (initalState)바꿔주기위해
  //2-2, 온체인지핸들러 라는 함수를만들고이벤트를 const name,value에넣어주고 event.target  name,value넣어줌
  //settodo바뀐값 ...todo에 name:value
  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };
  //2-3. 온서밋핸들러 라는 함수를만들고 이벤트를 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
  //해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다. 만약 투두의 타이틀의 공백이 "" 거나 todo의 바디의 공백이 ""면
  //리턴 settodos에(바뀐값)...todos기존값에 => ...todo바뀐값 아이디 넘버를 반환 setTodo(initialState)바뀐값을 호출  넘버 ++
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };
  //form 안에있는 onsubit객체에 아이디를 넣어준다, 그리고제목이나바뀌는값을 onchange해서 계속 바꿔준다
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          type="text"
          name="title"
          value={todo.title}
          className="add-input input-body"
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          type="text"
          name="body"
          value={todo.body}
          className="add-input"
          onChange={onChangeHandler}
        />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
}

export default Form;
