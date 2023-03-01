import React, { useState } from "react";

// import styles from "./TodoCreatePanel.module.css"

import "./TodoCreatePanel.css"

const initialValue = {
    title: "",
    description: ""
};

interface TodoCreatePanelProps {
    addTodo: ({ title, description }: Omit<Todo, "id" | "status">) => void;
};

export const TodoCreatePanel: React.FC<TodoCreatePanelProps> = ({ addTodo }) => {
    const [todo, setTodo] = useState(initialValue);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value })
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addTodo({ title: todo.title, description: todo.description });
        setTodo(initialValue);
    };

    console.log(todo)
    return (
        <div className="todo-create__container">
            <form className="todo-create__form" onSubmit={onSubmit}>
                <label htmlFor="title" className="todo-create__label">
                    <p>Title:</p>
                    <input name="title" id="title" type='text' placeholder="Enter title" onChange={onChange} value={todo.title} />
                </label>
                <label htmlFor="description" className="todo-create__label">
                    <p>Description:</p>
                    <input name="description" id="description" type='text' placeholder="Enter description" onChange={onChange} value={todo.description} />
                </label>
                <button type="submit" className="todo-create__btn">
                    Create
                </button>
            </form>
        </div >
    )
}