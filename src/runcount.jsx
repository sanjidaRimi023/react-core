import { use, useState } from "react";

export default function Batsman() {
  const [run, setRun] = useState(0);
    const [oneRun, setOneRun] = useState(0);
    const [sixRuns, setSixes] = useState(0);
    const [fourRuns, setFours] = useState(0);


  const singleRun = () => {
      const single = run + 1;
      const undatesingle = oneRun + 1;
      setOneRun(undatesingle);
    setRun(single);
  };
  const fourRun = () => {
      const four = run + 4;
      const updateFours = fourRuns + 1;
      setFours(updateFours);
    setRun(four);
  };
  const sixRun = () => {
      const six = run + 1;
      const updateSixes = sixRuns + 1;
      setSixes(updateSixes);
      setRun(six);
  };

  return (
    <div>
      <h1>Player : Tamim EQbal</h1>
          <h3>single Runs :{oneRun}</h3>
          <h3>four Runs : {fourRuns }</h3>
          <h3>six Runs : {sixRuns}</h3>
          {
              run > 50 && <h3>congratulation half century</h3>
          }
      <h2>score : {run}</h2>
      <button onClick={singleRun}>single run</button>
      <button onClick={fourRun}>four</button>
      <button onClick={sixRun}>Six </button>
    </div>
  );
}
