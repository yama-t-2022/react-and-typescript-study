import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//npm i --save-dev @types/uuid

//import "./App.css";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const createTodo = (title: string): Todo => {
  return {
    id: uuidv4(),
    title,
    completed: false,
  };
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  const createTodo = (title: string): Todo => {
    return {
      id: uuidv4(),
      title,
      completed: false,
    };
  };

  // const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {

  // };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    //再読み込み時のイベント停止
    event.preventDefault();

    //ログ表示
    console.log(todos);

    const todo = createTodo(title);
    setTodos([...todos, todo]);
    setTitle("");
  };

  const onchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1>簡易Todoアプリ </h1>

      <div>
        <form onSubmit={onSubmitHandler} method="post">
          <label htmlFor="">
            タイトル:
            <input type="text" value={title} onChange={onchangeHandler} />
          </label>
          <input type="submit" value="作成" />
        </form>
      </div>

      <hr />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>進捗</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(event) => {
                      console.log(event.target.checked);
                      console.log("TEST");
                      const newTodos = todos.map((_todo) => {
                        if (_todo.id === todo.id) {
                          console.log("TEST2");
                          return {
                            ..._todo,
                            completed: !todo.completed,
                          };
                        }
                        return _todo;
                      });

                      setTodos(newTodos);
                    }}
                  ></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
