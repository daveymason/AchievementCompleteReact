import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteContainer from './QuoteContainer';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get('https://achievementcomplete.com/shared/quotes.js').then(response => {
      setQuotes(response.data);
    })
  }

  return (
    <React.Fragment>
        {quotes.length !== 0 ? <QuoteContainer quotes={quotes} /> : null}
    </React.Fragment>
  );
}

export default App;