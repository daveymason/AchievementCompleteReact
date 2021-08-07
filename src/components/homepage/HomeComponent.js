import Navbar from '../structure/Navbar/Navbar';
import Introtron from './Introtron';
import Quotebox from './Quotebox';
import JumbotronIA from './JumbotronIA';
import JumbotronSF from './JumbotronSF';
import JumbotronTO from './JumbotronTO';
import JumbotronHW from './JumbotronHW';
import JumbotronAG from './JumbotronAG';
import Testimonial from './Testimonial/Testimonial';
import Form from './Form';
import Footer from '../structure/Footer/Footer';

function Homepage() {
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

export default Homepage;
