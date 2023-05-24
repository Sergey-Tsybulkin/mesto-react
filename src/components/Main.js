import React, { useEffect, useState } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile().then((profileInfo) => {
      setUserName(profileInfo.name);
      setUserDescription(profileInfo.about);
      setUserAvatar(profileInfo.avatar);
    });
    api.getInitialCards().then((cardsData) => {
      setCards(
        cardsData.map((data) => ({
          cardId: data._id,
          name: data.name,
          link: data.link,
          likes: data.likes,
        }))
      );
    });
  }, []);

  return (
    <main className="content center">
      <section className="profile center">
        <div className="profile__avatar-container">
          <img
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <button
            type="button"
            className="profile__avatar-button"
            id="avatar-button"
            onClick={() => {
              onEditAvatar(true);
            }}
          ></button>
        </div>
        <div className="profile__edit-avatar"></div>
        <div className="profile__info">
          <h1 className="profile__title hide-text">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={() => {
              onEditProfile(true);
            }}
          ></button>
          <p className="profile__subtitle hide-text">{userDescription}</p>
        </div>
        <button
          className="profile__add-button profile__type profile__type_add-button"
          type="button"
          onClick={() => {
            onAddPlace(true);
          }}
        ></button>
      </section>

      <section className="center">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card.cardId}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
