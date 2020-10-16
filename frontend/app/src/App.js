import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";
import Patient from "./pages/Patient";
import CreatePatient from "./pages/CreatePatient";
import EditPatent from "./pages/EditPatient";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/patient/create" component={CreatePatient} />

          <Route exact path="/patient/edit/:id" component={EditPatent} />
          <Route exact path="/" component={Patient} />
        </Layout>
        {/* <Route path="/">
          <Home />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
