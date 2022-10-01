import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Marcio from "./QuemSomosPaginas/marcio";
import Baracho from "./QuemSomosPaginas/baracho";
import Kovah from "./QuemSomosPaginas/kovah";
import Wictor from "./QuemSomosPaginas/wictor";

const Routes = () => {
  return (
    <>
      <Router>
        <Route exact path="/marcio" component={Marcio} />
      </Router>
      <Router>
        <Route exact path="/baracho" component={Baracho} />
      </Router>
      <Router>
        <Route exact path="/kovah" component={Kovah} />
      </Router>
      <Router>
        <Route exact path="/wictor" component={Wictor} />
      </Router>
    </>
  );
};

export default Routes;
