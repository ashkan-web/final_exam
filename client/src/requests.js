
// Requests

const BASE_URL = `http://localhost:3000/api/v1`;

// Create a module of Auction related fetch request methods
const Auction = {
  // fetch all auctions from server
  all() {
    return fetch(`${BASE_URL}/auctions`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // fetch a single auction
  one(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      credentials: "include"
    }).then(res => res.json());
  },
  // creating a auction
  create(params) {
    // `params` is an object that represents a auction
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  // updating a auction
  update(id, params) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};
const Bid = {
  // creating a bid
  create(id, params) {
    // `params` is an object that represents a auction
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/auctions/${id}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};
const Publish = {
  // Setting state to publish
  create(id, params) {
    // `params` is an object that represents a auction
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/auctions/${id}/publishings`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};
const Reserve = {
  // Setting state to Reserve met
  create(id, params) {
    // `params` is an object that represents a auction
    // { body: 'qBody', title: 'qTitle' }
    return fetch(`${BASE_URL}/auctions/${id}/reservings`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  }
};

// This is a helper module with methods associated with creating
// (and maybe later, destroying) a user session
const Session = {
  create(params) {
    // `params` is an object that represents a user
    // { email: 'some@email.com', password: 'some-password' }
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  destroy() {
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
};

const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    // params is going to look like
    // { email: <some-email>, password: <some-password>, first_name:....}
    return fetch(`${BASE_URL}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json());
  }
};

export { Auction, Bid, Session, User, Publish, Reserve };