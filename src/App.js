import '../node_modules/bootstrap/dist/css/bootstrap.css'; //This is wrong import from bootstrap
import Homepage from './components/homepage/HomeComponent';



function App() {
  return (
    <div className="App">
      <header>
        <Homepage />
      </header>
    </div>
  );
}

export default App;
