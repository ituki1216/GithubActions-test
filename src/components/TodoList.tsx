import React, { useEfect, useState } from "react";　// reactのimport
import axios from "axios";
 
interface Todo { // ここでtodoのデータ構造を明確化する
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); // todosはtodoリストを保持する、また初期値は空の文字列
  const [newTodo, setNewTodo] = useState<string>(""); // newtodoは新しく追加された情報を保持し,<string<("")でからの文字列を指定

  const fetchTodos = async () => { // fetch todosは非同期処理でtodoリストを取得する
    const response = await axios.get(`http://localhost:8000/api/todos/${id}`);
    setTodos(response.data);
  };
