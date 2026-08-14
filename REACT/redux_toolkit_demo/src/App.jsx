import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counterSlicer';
import { changeName, inncrementAge } from './redux/userSlicer';

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.users.name);
  const age = useSelector((state) => state.users.age);
  const dispatch=useDispatch()
  return (
    <div>
      <h1>count:{ count}</h1>
      <button
        onClick={() => {
          dispatch(increment())
      }}>increment</button>
      <button
        onClick={() => {
          dispatch(decrement())
        }}
      >decrement</button>
      {/* multile silcer used */}
      <h1>{name}</h1>
      <h1>age:{age}</h1>
      
      <button
        onClick={() => {
          dispatch(changeName("rahul kumar"))
        }}
      >changename</button>
      <button
        onClick={() => {
          dispatch(inncrementAge())
        }}
      >incrementAge</button>
    </div>
  )
}
