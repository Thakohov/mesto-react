import React from "react";
import heart from "../images/heart.svg";

function Card({ card, onCardClick }) {
  const handleClick = () => {
    onCardClick(card);
  };
  return (
    <li className="card">
      <button type="button" className="card__trash"></button>
      <img
        onClick={handleClick}
        src={card.link}
        className="card__image"
        alt={card.name}
      />
      <div className="card__caption-heart">
        <h3 className="card__caption">{card.name}</h3>
        <div className="card__heart-likes">
          <button type="button" className="card__button-heart">
            <img src={heart} alt="сердечко" className="card__heart" />
          </button>
          <span className="card__likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
