import "./App.scss";
import { useState } from "react";
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0);
  const handleSubstract = () => {
    setCount(count - 1);
  }
  const handleReset = () => {
    setCount(0);
  }
  const handleAdd = () => {
    setCount(count + 1);
  }
  const handleLucky = () => {
    const randomNum = Math.floor(Math.random() * (100 - (-100) +1)) + (-100);
    setCount(randomNum);
  }

  let color = "#fff";
  if (count >=1) {
    color = "green";
  } else if (count < 0) {
    color = "red";
  } else {
    color = "white";
  }

  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all">
        <h1 className="--text-light">React Counter App</h1>
        <p className="count --my2 --text-md --text-light --fw-bold" style={{color: color}}>{ count }</p>
        <div className="buttons">
          <Button className="--btn --btn-danger" onClick={handleSubstract} text='- Substract' />
          <Button className="--btn" onClick={handleReset} text="Reset" />
          <Button className="--btn --btn-success" onClick={handleAdd} text="+ Add" />
          <Button className="--btn --btn-golden" onClick={handleLucky} text="Lucky Button" />
        </div>
      </div>
    </section>
  );
}

export default App;