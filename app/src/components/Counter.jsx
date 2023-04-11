import React , { useState } from "react";

function Counter() {
    const [cont , setCont] = useState(0);

    return(
        <div>
            <h4>estoy en el componente Counter</h4>
            <p>click para aumentar</p>
            <button onClick={()=> setCont + 1}>
                click me!
            </button>
            <p>clicks hechos: { cont } veces</p>
        </div>
    )
}

export default Counter