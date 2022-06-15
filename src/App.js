import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./redux/counter";

import "./App.css";

function App() {
  //const [count, setCount] = React.useState(0);
  const count = useSelector(state => state.counter.count); //counter comes from store.js and count comes from counter.js
  //const {count} = useSelector(state => state.counter) //shortcut
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        increment by 10
      </button>
    </div>
  );
}

export default App;
