import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBolnicaComponent from './components/ListBolnicaComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
        <div className="container">
          <ListBolnicaComponent/>
        </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
