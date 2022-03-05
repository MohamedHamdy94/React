import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,

} from "react-router-dom";

import Fovorites from './pages/fovorites';
import Movies from './pages/Movies';
import Navebar from './Navebar';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      < Navebar />
      <div className="App">
        <Switch>
          <Route path={"/movies"} exact component={Movies} />
          <Route path={"/fovorites"} exact component={Fovorites} />
          <Route path={"/details/:id"} exact component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
