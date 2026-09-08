import React from 'react'

export default function App() {

  async function handleDelete(e) {
    e.preventDefault();

    const res = await fetch("https://dummyjson.com/users/1", {
      method: "DELETE"
    });

    const data = await res.json();

    console.log(data);
  }

  return (
    <>
      <h1>Delete User</h1>

      <form onSubmit={handleDelete}>
        <button type="submit">Delete User</button>
      </form>
    </>
  )
}
