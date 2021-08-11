import React, { useState, useEffect } from 'react';

const QuoteContainer = ({ quotes }) => {
  const [randomQuote, setRandomQuote] = useState({
    quote: '',
    author: ''
  });

  useEffect(() => {
    getQuote();
  }, []);

  function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandomQuote({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }

  return (
    <React.Fragment>
      <div className="quote-container">
        <div className="quote">
          <span className="fa fa-quote-left"></span>
          <q> {randomQuote.quote} </q>
          <span className="fa fa-quote-right"></span>
        </div>
        <div className="author">&mdash; {randomQuote.author}</div>
    </div>
    </React.Fragment>
  );
}

export default QuoteContainer;