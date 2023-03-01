import React, { useState } from 'react';

import { TodoCreatePanel } from './TodoCreatePanel/TodoCreatePanel';
import { TodoList } from './TodoList/TodoList';
// import styles from './App.module.css';

const TODOLIST_BASE = [
  { id: 1, title: "task1", description: "task number one", status: false },
  { id: 2, title: "task2", description: "task number two", status: false },
  { id: 3, title: "task3", description: "task number three", status: false },
]

function App() {
  const [todos, setTodos] = useState(TODOLIST_BASE);
  console.log(todos)

  const addTodo = ({ title, description }: Omit<Todo, "id" | "status">) => {
    setTodos([...todos, { id: todos[todos.length - 1].id + 1, title, description, status: false }]);
  };
  const toggleTodoStatus = (id: Todo["id"]) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status }
        }
        return todo;
      })
    )
  }

  return (
    <div>
      <TodoCreatePanel addTodo={addTodo} />
      <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus}/>
    </div>
  );
}

export default App;
