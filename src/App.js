import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Higlights from './pages/Higlights.jsx';
import Movie from './pages/Movie.jsx';
import Header from './shared/components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Header>
          <Route exact path="/movies" component={Higlights} />
          <Route path="/movies/:movieId" component={Movie} />
        </Header>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
