import React from "react";

function PopupWithForm({ title, name, isOpen, onClose, children, onSubmit }) {
  return (
    <>
      <div
        className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
      >
        <div className="popup__container">
          <button
            className="popup__close"
            type="button"
            onClick={onClose}
          ></button>
          <h2 className="popup__title">{title}</h2>
          <form
            className={`popup__form popup__form_type_${name}`}
            onSubmit={onSubmit}
          >
            {children}
          </form>
        </div>
      </div>
    </>
  );
}

export default PopupWithForm;
