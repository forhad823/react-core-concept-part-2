import { useState } from "react"

export default function Counter() {
    const[count, setCount] = useState(0)
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const counterStyle = {
        border: '2px solid green'
    }
    return (
        <div style={counterStyle}> 
            <h3 className="text-xl font-semibold">Count: {count}</h3>
            <button onClick={handleAdd} className="btn bg-green-400">Add</button>
        </div>
    )
}