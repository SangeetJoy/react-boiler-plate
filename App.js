import React from "react"
import ReactDOM from "react-dom/client"

const h1El = React.createElement("h1", {}, "Hello from React joy")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(h1El)