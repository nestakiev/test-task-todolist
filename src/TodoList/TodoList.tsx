import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";

import "./TodoList.css";

interface TodoListProps {
  todos: Todo[];
  toggleTodoStatus: (id: Todo["id"]) => void;
  setIdDetailedView: (id: Todo["id"]) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodoStatus,
  setIdDetailedView,
}) => {
  return (
    <table className="todo-list__container">
      <thead className="todo-list__head">
        <tr>
          <th className="todo-list__title">ID</th>
          <th className="todo-list__title">Title</th>
          <th className="todo-list__title">Description</th>
          <th className="todo-list__title">Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            toggleTodoStatus={toggleTodoStatus}
            setIdDetailedView={setIdDetailedView}
          />
        ))}
      </tbody>
    </table>
  );
};
