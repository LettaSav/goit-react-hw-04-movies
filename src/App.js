import { Route, NavLink, Switch } from 'react-router-dom';

import Homepage from './Views/Homepage';
import MoviesPage from './Views/MoviesPage';

function App() {
  return (
    <div className="App">
      <ul class="links">
        <li class="links_item">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li class="links_item">
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
