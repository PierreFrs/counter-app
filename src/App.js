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
    const context = new AudioContext();
    const frequency = getRandomFrequency();
    
    // Create an oscillator node with the randomly generated frequency
    const oscillator = context.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(frequency, context.currentTime);
  
    // Create a gain node to control the volume
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(1, context.currentTime);
  
    // Connect the oscillator to the gain node and the gain node to the context's destination
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
  
    // Start the oscillator and schedule it to stop after 0.5 seconds
    oscillator.start();
    oscillator.stop(context.currentTime + 0.5);
  
    // Set the count state to the randomly generated frequency
    setCount(frequency);
  };
  
  function getRandomFrequency() {
    return Math.floor(Math.random() * 900) + 100;
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