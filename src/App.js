import { Route, NavLink, Switch } from 'react-router-dom';

import Homepage from './Views/Homepage';
import MoviesPage from './Views/MoviesPage';
import MovieDetailsPage from './Views/MovieDetailsPage/MovieDetailsPage';

function App() {
  return (
    <div className="App">
      <ul className="links">
        <li className="links_item">
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li className="links_item">
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
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:slug" component={MovieDetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
