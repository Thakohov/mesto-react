import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [value, setValue] = React.useState("");
  const avatarRef = React.useRef();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    setValue("");
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__input-span">
        <input
          type="url"
          id="avatar"
          className="popup__input popup__input_type_avatar"
          name="avatar"
          placeholder="Введите ссылку"
          required
          value={value}
          onChange={handleChange}
          ref={avatarRef}
        />
        <span className="popup__error avatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
