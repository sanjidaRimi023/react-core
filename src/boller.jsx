import { useState } from "react"

export default function Baller() {
    const [oneBall, setOneBall] = useState(0);
    const [noBall, setNoBall] = useState(0);
    const [fullBall, setFullBall] = useState(0);
    const [totalOver, setTotalOver] = useState(0);

    const ballOne = () => {
        const newBallCount = oneBall + 1;

        if (newBallCount % 6 === 0) {
            setTotalOver(totalOver + 1);
        }

        setOneBall(newBallCount);
    };
    const ballNo = () => {
        const no = noBall + 1;
        setNoBall(no)
    }
    const fulBall = () => {
        const fBall = fullBall + 1;
        setFullBall(fBall);
    }
    return (
        <div>
            <h1>baller Score</h1>
            <h2>ball count : {oneBall}</h2>
            <h2>total over : {totalOver} </h2>
            <h2>No Ball :{noBall} </h2>
            <h2>Full tauch: {fullBall}</h2>

            <button onClick={ballOne}>one ball</button>
            <button onClick={ballNo}>No Ball</button>
            <button onClick={fulBall}>Full tough</button>
        </div>
    )
}