import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'; //This is wrong import from bootstrap
import './App.css';
import Introtron from './components/structure/Introtron';
import Navbar from './components/structure/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Introtron />
      </header>
    </div>
  );
}

export default App;
