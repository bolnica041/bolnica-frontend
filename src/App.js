import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBolnicaComponent from './components/ListBolnicaComponent';
import CreateBolnicaComponent from './components/CreateBolnicaComponent';
import { Link } from 'react-router-dom';
import ListBolnicaFunction from './components/ListBolnicaFunction';
import CreateBolnicaFunction from './components/CreateBolnicaFunction';


function App() {
  return (
    <div>
      <Router>
            <HeaderComponent/>
              <div className='container'> 
                <Routes>
                  <Route path = "/" element = {<ListBolnicaFunction/>}></Route>
                  <Route path = "/bolnica" element = {<ListBolnicaFunction/>}></Route>
                  <Route path = "/createBolnica" element = {<CreateBolnicaComponent/>}></Route>
                </Routes>
              </div>
            < FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
