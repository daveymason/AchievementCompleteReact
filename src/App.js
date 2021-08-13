import "../node_modules/bootstrap/dist/css/bootstrap.css"; //This is wrong import from bootstrap
import { BrowserRouter } from "react-router-dom";
import Main from "./components/MainComponent";
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
        <div className="App">
            <Main />
        </div>
    </BrowserRouter>
</Provider>
  );
}

export default App;
