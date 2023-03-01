import React from "react";
import { createPortal } from "react-dom";
import "./ModalTodoInfo.css";

const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

interface ModalTodoInfoProps {
  detailedTodo: Todo | undefined;
  setIdDetailedView: (id: Todo["id"]) => void;
  toggleTodoStatus: (id: Todo["id"]) => void;
}
export const ModalTodoInfo: React.FC<ModalTodoInfoProps> = ({
  detailedTodo,
  setIdDetailedView,
  toggleTodoStatus,
}) => {
  if (!detailedTodo) {
    return createPortal(<div className="modal__backdrop"></div>, modalRoot);
  }
  const { id, title, description, status } = detailedTodo;

  return createPortal(
    <div className="modal__backdrop">
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <p className="modal__description">Description:</p>
        <p>{description}</p>
        <p className="modal__status">Status:</p>
        <input
          type="checkbox"
          defaultChecked={status}
          onChange={() => toggleTodoStatus(id)}
        />
        <button
          className="modal__btn"
          type="button"
          onClick={() => setIdDetailedView(0)}
        >
          Close
        </button>
      </div>
    </div>,
    modalRoot
  );
};
