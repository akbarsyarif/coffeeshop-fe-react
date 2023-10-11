import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import getImageUrl from "./utils/imageGetter";

function App() {
  const [count, setCount] = useState(0);
  // console.log(getImageUrl);

  // useEffect(handler, deps)
  // deps=> [] => behaviour seperti componentDidMount
  // deps => [var1, var2, ...] => behaviour seperti componentDidUpdate
  // componentWill Unmount digambarkan menggunakan return pada handler useEffect
  useEffect(() => {
    console.log("donemounting");
    // return () => {
    //      cleanup function
    // }
  }, []);

  useEffect(() => {
    console.log("doneupdate");
  }, [count]);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <img src={getImageUrl("react", "svg")} className="logo react" alt="react-logo" />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return <div>App</div>;
//   }
// }

// export default App;
