import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './App.css';
import AnaSayfa from "./components/AnaSayfa";
import Error from "./components/404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={AnaSayfa} />
            <Route exact path='*' component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
