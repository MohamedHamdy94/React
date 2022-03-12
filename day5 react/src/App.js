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
import { LanguageContext } from './pages/Language/languag';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Home from './pages/home';

function App() {
  const [lang,setlang] = useState("en");
  // const languag =useSelector((state)=>state.languag.lang)
  return (
    <LanguageContext.Provider value={{lang ,setlang}}>
      <div className={lang==='an'?'text-left':'text-right'}
      dir={lang==='en' ? 'ltr':'rtl'}
      
      >

    <BrowserRouter>
      < Navebar />
      <div className="App">
        <Switch>
        <Route path={"/"} exact component={Home} />

          <Route path={"/movies"} exact component={Movies} />
          <Route path={"/fovorites"} exact component={Fovorites} />
          <Route path={"/details/:id"} exact component={Details} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
    </LanguageContext.Provider>
  );
}

export default App;
