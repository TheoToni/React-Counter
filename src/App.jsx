import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function countHandler() {
    setCount((prevState) => {
      return prevState + 1;
    });
  }

  return (
    <div className="container">
      <div className="readme">
        <p>
          {count < 5
            ? "Nothing special here. Created to practise states for a second."
            : "Didnt you click enough? Hire me if you like it that much!"}
        </p>
        {count < 6 && (
          <p>
            Oh hello there! If thats enough for you, feel free to hire me.
            Otherwise stay on track! More incoming!
          </p>
        )}
      </div>
      <div className="App">
        <h1>
          {count < 5
            ? "Click until something happens!"
            : "STOP I CANT TAKE IT ANYMORE"}
        </h1>
        {count < 6 && <button onClick={countHandler}>Click me</button>}
        <h2>{count}</h2>
        {count > 5 && <p>6 is my favourite number.</p>}
        <p>TheoJS</p>
      </div>
    </div>
  );
}

export default App;
