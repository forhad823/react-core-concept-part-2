import Counter from "./counter";
import Batsman from "./batsman";
import "./App.css";

function App() {
  function handleClicked() {
    alert("I am clicked");
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <section className="space-y-2">
        {/* <h1>Vite + React</h1>
        <button className="btn bg-amber-300 text-xl">Click me</button> <br />
        <button
          onClick={() => handleAdd5(5)}
          className="btn bg-amber-300 text-xl"
        >
          Click me
        </button> */}
        <br />
        {/* _______________________________________ */}
        <Counter></Counter>
        <Batsman></Batsman>
      </section>
    </>
  );
}

export default App;
