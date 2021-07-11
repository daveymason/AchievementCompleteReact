import '../node_modules/bootstrap/dist/css/bootstrap.css'; //This is wrong import from bootstrap
import Navbar from './components/structure/Navbar/Navbar';
import Introtron from './components/structure/Introtron';
import Quotebox from './components/structure/Quotebox';
import JumbotronIA from './components/structure/JumbotronIA';
import JumbotronSF from './components/structure/JumbotronSF';
import JumbotronTO from './components/structure/JumbotronTO';
import JumbotronHW from './components/structure/JumbotronHW';
import JumbotronAG from './components/structure/JumbotronAG';
import Testimonial from './components/structure/Testimonial/Testimonial';
import Form from './components/structure/Form';
import Footer from './components/structure/Footer/Footer';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Introtron />
        <Quotebox />
        <JumbotronIA />
        <JumbotronSF />
        <JumbotronTO />
        <JumbotronHW />
        <JumbotronAG />
        <Testimonial />
        <Form />
        <Footer />
      </header>
    </div>
  );
}

export default App;
