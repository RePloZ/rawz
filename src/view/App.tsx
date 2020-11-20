import React from 'react';
import 'styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Menu from "components/Menu"
import NotFound from './NotFound';
import FilterArticle from "./FilterArticle";
import ListArticle from "./ListArticle";

function App() {
  return (<Router>
    <Menu />
    <main>
    <Switch>
      <Route path="/404">
        <NotFound />
      </Route>
      <Route path="/article/:id" >
        <FilterArticle />
      </Route>
      <Route path="" >
        <ListArticle />        
      </Route>
    </Switch> 
    </main>
  </Router>);
}

export default App;
