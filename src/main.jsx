import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { GameModalProvider } from "./context/gameModal.jsx";

import App from "./App.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GameModalProvider>
            <App />
        </GameModalProvider>
    </React.StrictMode>
);
