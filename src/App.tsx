import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//npm i --save-dev @types/uuid

//import "./App.css";

//ToDoデータ定義
type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

//ToDoデータ生成
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

  const createTodo2 = (id: string, title: string, completed): Todo => {
    return {
      id,
      title,
      completed,
    };
  };

  //(参考) 以下の形式の関数式でもOK
  // const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {

  // };

  //作成ボタン押下時 イベント
  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (event) => {
    //再読み込み時のイベント停止
    event.preventDefault();

    //ログ表示
    console.log(todos);

    //ToDoデータを生成後に設定
    const todo = createTodo(title);
    setTodos([...todos, todo]);

    //クリア
    setTitle("");
  };

  //タイトル変更時イベント
  const onchangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(event.target.value);

    //タイトルここで更新
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
          {todos.map((todo, index) => {
            return (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(event) => {
                      //todosをクローン
                      const newTodos = [...todos];
                      //チェックボックの値で書き換え
                      newTodos[index].completed = event.target.checked;
                      //新しい配列で書き換え
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
