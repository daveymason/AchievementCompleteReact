import Introtron from './Introtron';
import Quotebox from './Quotebox';

function Homepage() {
    return (
      <div className="App">
        <wrapper>
          <Introtron />
          <Quotebox />
        </wrapper>
    </div>
  );
}

export default Homepage;