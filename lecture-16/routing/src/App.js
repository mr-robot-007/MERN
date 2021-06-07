import React from "react";
import Users from "./pages/users";
import About from "./pages/about";
import Home from "./pages/home";
import Topics from "./pages/topics";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topic">topic</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/users"exact>
            <Users />
          </Route>
          <Route path="/topic">
            <Topics />
          </Route>
          <Route path="/"exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
