import { Route, NavLink, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from 'react-loader-spinner';

const Homepage = lazy(() =>
  import('./Views/Homepage' /* webpackChunkName: "homepage"*/),
);

const MoviesPage = lazy(() =>
  import('./Views/MoviesPage' /* webpackChunkName: "movie-page"*/),
);

const MovieDetailsPage = lazy(() =>
  import(
    './Views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/
  ),
);

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
      <Suspense
        fallback={
          <Loader
            className="loader"
            type="TailSpin"
            color="#800000"
            height={300}
            width={300}
            timeout={3000} //3 secs
          />
        }
      >
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:slug" component={MovieDetailsPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
