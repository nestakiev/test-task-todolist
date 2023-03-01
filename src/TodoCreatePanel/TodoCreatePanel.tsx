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

        if(todo.title.trim().length === 0) {
            const errorMessage = document.getElementsByClassName("todo-create__input-error-message")[0] as HTMLElement;
            const inputTitle = document.getElementById("title") as HTMLElement;
            inputTitle.classList.add("todo-create__input-error-border");
            errorMessage.classList.add("todo-create__input-error-message-show");

            setTimeout(() => {
                inputTitle.classList.remove("todo-create__input-error-border");
                errorMessage.classList.remove("todo-create__input-error-message-show"); 
            }, 2500);
            return
        }

        if(todo.description.trim().length === 0) {
            const errorMessage = document.getElementsByClassName("todo-create__input-error-message")[1] as HTMLElement;
            const inputTitle = document.getElementById("description") as HTMLElement;
            inputTitle.classList.add("todo-create__input-error-border");
            errorMessage.classList.add("todo-create__input-error-message-show");

            setTimeout(() => {
                inputTitle.classList.remove("todo-create__input-error-border");
                errorMessage.classList.remove("todo-create__input-error-message-show"); 
            }, 2500);
            return
        }

        addTodo({ title: todo.title, description: todo.description });
        setTodo(initialValue);
    };

    return (
        <div className="todo-create__container">
            <form className="todo-create__form" onSubmit={onSubmit}>
                <label htmlFor="title" className="todo-create__label">
                    <p>Title:</p>
                    <input name="title" id="title" type='text' placeholder="Enter title" onChange={onChange} value={todo.title} />
                    <p className="todo-create__input-error-message">This field is empty</p>
                </label>
                <label htmlFor="description" className="todo-create__label">
                    <p>Description:</p>
                    <input name="description" id="description" type='text' placeholder="Enter description" onChange={onChange} value={todo.description} />
                    <p className="todo-create__input-error-message">This field is empty</p>
                </label>
                <button type="submit" className="todo-create__btn">
                    Create
                </button>
            </form>
        </div >
    )
}