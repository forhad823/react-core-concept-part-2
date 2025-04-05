import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleRuns = (stroke) => {
    const updatedRuns = runs + stroke;
    setRuns(updatedRuns);
    //----------------------------------------------
    const run = stroke;
    if (run === 6) {
      const updatedSixes = sixes + 1;
      setSixes(updatedSixes);
    }
  };
  return (
    <div className="border-2 border-blue-600">
      <h3 className="text-xl font-semibold">Player: Bangu batsman</h3>
      <h1 className="text-2xl font-semibold">score: {runs}</h1>
      {runs >= 50 && <p>Your score is: 50</p>}
      <p>Total six: {sixes}</p>
      <button
        onClick={() => handleRuns(1)}
        className="btn  bg-blue-600 text-white"
      >
        single
      </button>
      <button
        onClick={() => handleRuns(4)}
        className="btn  bg-blue-600 text-white"
      >
        Four
      </button>
      <button
        onClick={() => handleRuns(6)}
        className="btn  bg-blue-600 text-white"
      >
        Six
      </button>
    </div>
  );
}
