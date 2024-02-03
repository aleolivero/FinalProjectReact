// Importart librerias
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"

// Obtener referencia al div ROOT
const el = document.getElementById("root");

// Tomar control de div ROOT
const root = ReactDOM.createRoot(el);


// Mostrar componente
root.render(<App/>)