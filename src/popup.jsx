import React from "react";
import { render } from "react-dom";

function Popup(){
    return (
        <div>
            <h1>This is a simple popup</h1>
        </div>
    );
}

render(<Popup />, document.getElementById("react-target"));