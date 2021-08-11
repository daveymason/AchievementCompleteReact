import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteContainer from './QuoteContainer';

const Motivation = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios.get('https://achievementcomplete.com/quotes.js').then(response => {
      setQuotes(response.data);
    })
  }

  return (
    <React.Fragment>
        {quotes.length !== 0 ? <QuoteContainer quotes={quotes} /> : null}
    </React.Fragment>
  );
}

export default Motivation;