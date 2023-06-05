import React from "react";
import ReactDOM from "react-dom/client";
import assets from "./lgin/assets"
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

function IzqCiber() {
  return (
    <div>
      <div id = "izqCiber">
        <img src={assets[2]} alt="logoCiber" />
        <p id="esloganCiber">Aprende a tu ritmo, en cualquier momento y en cualquier lugar</p>

      </div>
    </div>
  );
}

function DerCiber() {
  return <div></div>;
}

root.render(<IzqCiber/>)