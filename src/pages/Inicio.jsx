import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styleInicio.css"


const Home = () => {
  const [currentPage, setCurrentPage] = useState("Inicio");
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <h1>Inicio</h1>
      <ul>
        <li>
          <Link to="/PyroBot" onClick={() => handleClick("PyroBot")}>
            PyroBot
          </Link>
        </li>
        <li>
          <Link to="/Motivos" onClick={() => handleClick("Motivos")}>
            Motivos
          </Link>
        </li>
        <li>
          <Link to="/QuemSomos" onClick={() => handleClick("QuemSomos")}>
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="/Ideia" onClick={() => handleClick("Ideia")}>
            Ideia
          </Link>
        </li>
        <li>
          <Link to="/Resultados" onClick={() => handleClick("Resultados")}>
            Resultados
          </Link>
        </li>
      </ul>
      <button onClick={() => handleClick("Inicio")}>Voltar para Início</button>
    </div>
  )
}
export default Home;
