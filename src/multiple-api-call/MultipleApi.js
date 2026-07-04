import React, { useEffect, useState } from "react";
import axios from "axios";

export default function MultipleApi() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [usersRes, postsRes, todosRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users?_limit=5"),
          fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
          fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        ]);

        const usersData = await usersRes.json();
        const postsData = await postsRes.json();
        const todosData = await todosRes.json();

        setUsers(usersData);
        setPosts(postsData);
        setTodos(todosData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    // Axios example using Promise.all
    
    async function axiosfetchDataMethod() {
    try {
      const [users, posts, todos] = await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/users?_limit=5 "),
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5"),
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      ]);

      console.log(users.data);
      console.log(posts.data);
      console.log(todos.data);
    } catch (err) {
      console.log(err);
    }
  }

    axiosfetchDataMethod();

  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <h2>Multiple API Example</h2>

      <h3>Users ({users.length})</h3>
      <ul>
        {users.slice(0, 5).map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h3>Posts ({posts.length})</h3>
      <ul>
        {posts.slice(0, 5).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <h3>Todos ({todos.length})</h3>
      <ul>
        {todos.slice(0, 5).map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}