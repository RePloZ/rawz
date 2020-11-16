import React from 'react';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Menu } from "features/articles/Menu/Menu"
import { ArticleList } from "features/articles/Articles/Articles"
import Info from 'features/articles/Info';

function App() {
  return (<Router>
    <Menu />
    <main>
    <Switch>
      <Route path="/article/:id">
        <Info />
      </Route>
      <Route path="/" >
        <ArticleList />
      </Route>
    </Switch> 
    </main>
  </Router>);
}

export default App;
