import "../node_modules/bootstrap/dist/css/bootstrap.css"; //This is wrong import from bootstrap
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
