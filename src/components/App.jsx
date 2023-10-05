import React from "react";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";
import Api from "../utils/Api.js";
import "../pages/index.css";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(!selectedCard);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
        buttonText="Сохранить"
      >
        <fieldset className="popup__input-span">
          <input
            type="text"
            id="name"
            className="popup__input popup__input_type_name"
            name="name"
            required
            minLength="2"
            maxLength="40"
          />
          <span className="popup__error name-error"></span>
        </fieldset>
        <fieldset className="popup__input-span">
          <input
            type="text"
            id="job"
            className="popup__input popup__input_type_job"
            name="job"
            required
            minLength="2"
            maxLength="200"
          />
          <span className="popup__error job-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
        buttonText="Сохранить"
      >
        <fieldset className="popup__input-span">
          <input
            type="url"
            id="avatar"
            className="popup__input popup__input_type_avatar"
            name="avatar"
            placeholder="Введите ссылку"
            required
          />
          <span className="popup__error avatar-error"></span>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onSubmit={handleSubmit}
        buttonText="Создать"
      >
        <fieldset className="popup__input-span">
          <input
            type="text"
            id="place"
            className="popup__input popup__input_type_place"
            name="name"
            placeholder="Название"
            required
            minLength="2"
            maxLength="30"
          />
          <span className="popup__error place-error"></span>
        </fieldset>
        <fieldset className="popup__input-span">
          <input
            type="url"
            id="src"
            className="popup__input popup__input_type_src"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error src-error"></span>
        </fieldset>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
