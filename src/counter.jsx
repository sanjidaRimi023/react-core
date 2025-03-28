import { useState } from "react"

export default function Counter() { 
    const [count, setCount] = useState(0);
    const hendleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const hendleSub = () => {
        if (count != 0) {
            const countNew = count - 1;
        setCount(countNew);
        }
    }
    const countStyle = {
        border: '3px solid deeppink'
    }
    return (
        <div style={countStyle}>
            <h2>count :{count}</h2>
            <button onClick={hendleAdd}>Add</button>
            <button onClick={hendleSub}>substract</button>
        </div>
    )
}