const API = "https://jsonplaceholder.typicode.com";

export const getUsers = () =>
  fetch(`${API}/users?_limit=5`).then(res => res.json());

export const getPosts = () =>
  fetch(`${API}/posts?_limit=5`).then(res => res.json());

export const getTodos = () =>
  fetch(`${API}/todos?_limit=5`).then(res => res.json());