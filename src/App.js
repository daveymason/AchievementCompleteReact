import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
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
