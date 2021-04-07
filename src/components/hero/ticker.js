import { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import styles from './ticker.styles';

const cp = require('coinpaprika-js');
const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
  environment: 'master',
  accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
});

const Ticker = () => {
  const [fact, setFact] = useState(null);
  const [todayDate, setTodayDate] = useState([]);
  const [dogePrice, setDogePrice] = useState(null);

  useEffect(() => {
    async function fetchDogePrice() {
      // You can await here
      const { price_usd} = await cp.ticker('doge-dogecoin', { quotes: 'USD' });
      setDogePrice(price_usd);
    }
    fetchDogePrice();
    client
      .getEntry('2hvJxHus2fNs0IvBurdXGI')
      .then(function(entry) {
        const factsListKeys = Object.keys(entry.fields.facts);
        const randomIndex =
          factsListKeys[Math.floor(Math.random() * factsListKeys.length)];
        const randomFact = entry.fields.facts[randomIndex];
        if (!randomFact) {
          setFact('');
        }
        setFact(randomFact.d);
      })
      .catch(function(error) {
        console.log(error);
        setFact('');
      });

    const timeDate = new Date().toLocaleString();
    const timeDateArr = timeDate.split(', ');
    setTodayDate(timeDateArr);
  }, [dogePrice]);

  return (
    <div css={styles}>
      <Typography variant="caption" className="marquee">
        <span>
          {`${todayDate[0]}`}
          <div className="dot">&#10687;</div>
          {`${todayDate[1]}`}
          <div className="dot">&#10687;</div>
          {`WE ARE HIRING (SEE BELOW)`}
          <div className="dot">&#10687;</div>
          {`FACT OF THE DAY: ${fact}`}
          <div className="dot">&#10687;</div>
          {`CURRENT DOGECOIN PRICE: $${dogePrice}`}
        </span>
      </Typography>
      <Typography variant="caption" className="marquee">
        <span>
          {`${todayDate[0]}`}
          <div className="dot">&#10687;</div>
          {`${todayDate[1]}`}
          <div className="dot">&#10687;</div>
          {`WE ARE HIRING (SEE BELOW)`}
          <div className="dot">&#10687;</div>
          {`FACT OF THE DAY: ${fact}`}
          <div className="dot">&#10687;</div>
          {`CURRENT DOGECOIN PRICE: $${dogePrice}`}
        </span>
      </Typography>
    </div>
  );
};

export default Ticker;
