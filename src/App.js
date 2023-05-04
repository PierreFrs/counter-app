import "./App.scss";

function App() {
  return (
    <section className="counter-sec --flex-center">
      <div className="container counter --card --center-all">
        <h1 className="--text-light">React Counter App</h1>
        <p className="count --my2 --text-md --text-light">0</p>
        <div className="buttons">
          <button className="--btn --btn-danger">- Substract</button>
          <button className="--btn">Reset</button>
          <button className="--btn --btn-success">+ Add</button>
        </div>

      </div>
    </section>
  );
}

export default App;