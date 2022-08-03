import React from "react";
import { useState } from "react";
import "./App.css";

// 1:10付近

function App() {
  return (
    <div>
      <h1>簡易Todoアプリ </h1>

      <div>
        <form>
          <label htmlFor="">
            タイトル:
            <input type="text" />
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
      </table>
    </div>
  );
}

export default App;
