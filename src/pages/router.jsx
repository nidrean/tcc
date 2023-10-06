import { Routes, Route } from "react-router-dom"
import Motivos from "./Motivos"

import Inicio from "./pages/Inicio"
import Motivos from "./pages/Motivos"
import PecasdoProjesto from "./pages/PecasdoProjeto"
import Pyrobot from "./pages/PyroBot"
import QuemSomos from "./pages/QuemSomos"
import Resultados from "./pages/Resultados"

function Router() {
    return (
        <Routes>
            <Route path="/" element={< Inicio/>} />
            <Route path="/" element={< Motivos/>} />
            <Route path="/" element={< PecasdoProjesto/>} />
            <Route path="/" element={< Pyrobot/>} />
            <Route path="/" element={< QuemSomos/>} />
            <Route path="/" element={< Resultados/>} />
        </Routes>
    )
}

export default Router