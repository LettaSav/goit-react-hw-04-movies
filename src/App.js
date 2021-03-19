import { Route, NavLink, Switch } from 'react-router-dom';
import { useState } from 'react';

import Homepage from './Views/Homepage';

import MoviesPage from './Views/MoviesPage';

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            MoviePage
          </NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
