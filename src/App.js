import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/login"><Login/></Route>
            <Route path="/detail/:id"><Detail/></Route>
            <Route path="/"><Home/></Route>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
