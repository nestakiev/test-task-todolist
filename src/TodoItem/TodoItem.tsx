import React from "react";
import "./TodoItem.css";

interface TodoItemProps {
  todo: Todo;
  toggleTodoStatus: (id: Todo["id"]) => void;
  setIdDetailedView: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodoStatus,
  setIdDetailedView,
}) => {
  const { id, title, description, status } = todo;
  const onClick = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    if (target.tagName === "INPUT" && target.type === "checkbox") {
      return;
    }
    setIdDetailedView(id);
  };
  return (
    <tr className="todo-item__row" onClick={onClick}>
      <td className="todo-item__cell">{id}.</td>
      <td className="todo-item__cell">{title}</td>
      <td className="todo-item__cell">{description}</td>
      <td className="todo-item__cell">
        <input
          type="checkbox"
          defaultChecked={status}
          onChange={() => toggleTodoStatus(id)}
        />
      </td>
    </tr>
  );
};
