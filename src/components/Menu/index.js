import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <nav className="Menu">
      <a className="Logo" href="/">
        aluraflix
      </a>
      <a className="ButtonLink" href="/">
        Novo vídeo
      </a>
    </nav>
  );
}

export default Menu;
