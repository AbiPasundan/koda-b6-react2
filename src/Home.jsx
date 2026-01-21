import { useState } from "react";
import "./style.css";

function ButtonMinus({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      -
    </button>
  );
}

function ButtonPlus({ onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled}>
      +
    </button>
  );
}

function ShowRes({ children }) {
  return <h1>{children}</h1>;
}

export default function Home() {
  const [count, setCount] = useState(0);

  function handlePlus() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleMinus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex justify-center items-center gap-5 h-screen">
      <ButtonMinus onClick={handleMinus} disabled={count === 0} />
      <ShowRes>{count}</ShowRes>
      <ButtonPlus onClick={handlePlus} disabled={count === 10} />
    </div>
  );
}
