import React, { useState } from "react";

export default function Like() {
    const [count, setCount] = useState(0);

    return (
        <div className="Like">
            <button onClick={() => setCount(count - 1)}>👎</button>
            <p className="count">{count}</p>
            <button onClick={() => setCount(count + 1)}>👍</button>
        </div>
    );
}
