class Api {
  constructor(options) {
    // receive url server and headers
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  // check answer from server
  _handleResponse(res) {
    if (res.ok) {
      return res.json(); // if yes => return data
    }
    return Promise.reject(`Error: ${res.status}`); // or return error
  }

  // request to server and get data profile
  getProfile() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  // change profile info on server
  editProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name, //name = value name object (editProfile(data))
        about: data.about, //about = value about object (editProfile(data))
      }),
    }).then(this._handleResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  setUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._handleResponse);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  //   addLike(cardId) {
  //     return fetch(`${this._url}/cards/${cardId}/likes`, {
  //       method: 'PUT',
  //       headers: this._headers,
  //     }).then(this._handleResponse);
  //   }

  //   deleteLike(cardId) {
  //     return fetch(`${this._url}/cards/${cardId}/likes`, {
  //       method: 'DELETE',
  //       headers: this._headers,
  //     }).then(this._handleResponse);
  //   }
  // }

  // like/dislike
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: `${!isLiked ? "DELETE" : "PUT"}`,
      headers: this._headers,
    }).then(this._handleResponse);
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-65",
  headers: {
    authorization: "e5cf9ce5-83ea-4919-bb56-96280137220a",
    "Content-Type": "application/json",
  },
});

export default api;
