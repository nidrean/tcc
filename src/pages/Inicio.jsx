import { Link } from "react-router-dom";
import "./styleInicio.css"

const Inicio = () => {
  
  return (
    <div>
      <h1>Inicio</h1>
      <ul>
        <li>
          <Link to="/PyroBot" >
            PyroBot
          </Link>
        </li>
        <li>
          <Link to="/Motivos" >
            Motivos
          </Link>
        </li>
        <li>
          <Link to="/QuemSomos" >
            Quem Somos
          </Link>
        </li>
        <li>
          <Link to="/Ideia" >
            Ideia
          </Link>
        </li>
        <li>
          <Link to="/Resultados" >
            Resultados
          </Link>
        </li>
      </ul>
      <button>Voltar para Início</button>
    </div>
  )
}

export default Inicio;
