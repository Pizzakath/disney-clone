import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from "./components/login";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
