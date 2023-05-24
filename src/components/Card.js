import React from "react";

function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }
  return (
    <li className="elements__element">
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <button className="elements__trash" type="button"></button>
      <div className="elements__info">
        <h2 className="elements__caption hide-text">{card.name}</h2>
        <div className="elements__like-section">
          <button className="elements__like-button" type="button"></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
