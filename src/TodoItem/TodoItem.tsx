import React from "react";
import "./TodoItem.css";

interface TodoItemProps {
    todo: Todo;
    toggleTodoStatus: (id: Todo["id"]) => void;
};

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodoStatus }) => {
    const { id, title, description, status } = todo;
    return (
        <tr className="todo-item__row">
            <td className="todo-item__cell">{id}.</td>
            <td className="todo-item__cell">{title}</td>
            <td className="todo-item__cell">{description}</td>
            <td className="todo-item__cell"><input type="checkbox" defaultChecked={status} onChange={() => toggleTodoStatus(id)}/></td>
        </tr>
    )
}