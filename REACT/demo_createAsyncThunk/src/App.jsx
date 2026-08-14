import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux/userSlicer";

export default function App() {
  const { users, loading, error } = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();

  return (
    <div>
     {loading && <h2>Loading...</h2>}

{error && <h2>Error: {error}</h2>}
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        fetch data
      </button>
      {
        users.map((data,key) => {
          return <h1 key={data.id}>{ data.name}</h1>
        })
      }
    </div>
  );
}