import "./App.scss";

function App() {
  return (
    <section className="counter-sec">
      <div className="container counter">
        <h1>React Counter App</h1>
        <p>0</p>
        <div className="buttons">
          <button>- Substract</button>
          <button>Reset</button>
          <button>+ Add</button>
        </div>

      </div>
    </section>
  );
}

export default App;