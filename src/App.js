import { Route, Switch, BrowserRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnaSayfa from "./components/AnaSayfa";
import Panel from "./components/Panel";
import Giriş from "./components/Giriş";
import Profil from "./components/Profil";
import Error from "./components/404";
import Düzenle from "./components/Profil-Düzenle";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={AnaSayfa} />
            <Route exact path='/panel' component={Panel} />
            <Route exact path='/giris' component={Giriş} />
            <Route exact path='/profil' component={Profil} />
            <Route exact path='/profil/düzenle' component={Düzenle} />
            <Route exact path='*' component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;