import { createElement, render, useState } from "./react.js";

const root = document.getElementById("root");

// 1. Wrap the UI structure inside a functional component so it can execute multiple times
function CounterApp() {
    // 2. Extract our custom reactive state and tracking engine
    const [count, setCount] = useState(0);

    return createElement(
        "div", 
        { style: "text-align: center; margin-top: 5rem; font-family: sans-serif;" }, 
        createElement("h1", null, `Custom React Framework`),
        createElement("h2", { style: "font-size: 3rem; color: #34495e;" }, `${count}`),
        createElement(
            "button", 
            { 
                style: "padding: 0.8rem 1.5rem; font-size: 1rem; background: #2ecc71; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 0.5rem;",
                onClick: () => setCount(count + 1) 
            }, 
            "Increment"
        ),
        createElement(
            "button", 
            { 
                style: "padding: 0.8rem 1.5rem; font-size: 1rem; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;",
                onClick: () => setCount(count - 1) 
            }, 
            "Decrement"
        )
    );
}

// 💡 Link our component reference to our framework variable so it knows how to self-update
import { createElement as _c } from "./react.js"; 
// Trick to initialize our app component hook pointer:
window.AppHookPointer = CounterApp;

// Link the app function to the framework engine hook right before rendering
import { setAppFn } from "./react.js";
setAppFn(CounterApp);

render(CounterApp(), root);