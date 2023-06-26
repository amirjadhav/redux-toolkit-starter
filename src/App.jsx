import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counter/counterslice";
import "./App.css";
import CounterValue from "./components/CounterValue";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <CounterValue />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p>
        <button onClick={() => dispatch(increment())}> Increment </button>
      </p>
      <p>
        <button onClick={() => dispatch(decrement())}> Decrement </button>
      </p>
    </>
  );
}

export default App;
