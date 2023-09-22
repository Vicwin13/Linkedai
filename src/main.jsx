import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link
      href="https://api.fontshare.com/v2/css?f[]=clash-display@200,400,700,500,600,1,300&f[]=montserrat@500,1,900,700,200,400,100,800,300,600&display=swap"
      rel="stylesheet"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
    <link
      href="https://fonts.googleapis.com/css2?family=Unica+One&display=swap"
      rel="stylesheet"></link>
    <App />
  </React.StrictMode>
);
