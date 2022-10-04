import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marcio from "./QuemSomosPaginas/marcio";
import Baracho from "./QuemSomosPaginas/baracho";
import Kovah from "./QuemSomosPaginas/kovah";
import Wictor from "./QuemSomosPaginas/wictor";
export default function RoutesFunction() {
  return (
    <Router>
      <Routes>
        <Route path="/marcio" element={<Marcio />} />
        <Route path="/baracho" element={<Baracho />} />
        <Route path="/kovah" element={<Kovah />} />
        <Route path="/wictor" element={<Wictor />} />
      </Routes>
    </Router>
  );
}

export { RoutesFunction };
