import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [stockVal, setStockVal] = useState(0);
  const [annualDividend, setAnnualDividend] = useState(0);
  const [numberOfStocks, setnumberOfStocks] = useState(0);
  const [totalAnnualDividend, setTotalAnnualDividend] = useState(0);
  const handleChange = (e, type) => {
    let numberOfstocks, dividendValueIntotal;
    if (type === "stock") {
      dividendValueIntotal = Number(e.target.value) * annualDividend;
      numberOfstocks = e.target.value;
    }
    if (type === "dividend") {
      numberOfstocks = Number(e.target.value) / annualDividend;
      dividendValueIntotal = e.target.value;
    }
    setnumberOfStocks(numberOfstocks);
    setTotalAnnualDividend(dividendValueIntotal);
  };
  return (
    <div className="container ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="subtitle">
        Dividend Calculator
      </h1>
      <table className="card ">
      <tbody>
        <tr>
          <td>
            <label>Stock Value: </label>
          </td>
          <td>
            <input
              type="number"
              value={stockVal}
              onChange={(e) => setStockVal(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Annual dividend per stock: </label>
          </td>
          <td>
            <input
              type="number"
              value={annualDividend}
              onChange={(e) => setAnnualDividend(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Number of stocks to buy: </label>
          </td>
          <td>
            <input
              type="number"
              value={numberOfStocks}
              disabled={stockVal === 0 || annualDividend === 0}
              onChange={(e) => handleChange(e, "stock")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Annual dividend: </label>
          </td>
          <td>
            <input
              type="number"
              value={totalAnnualDividend}
              disabled={stockVal === 0 || annualDividend === 0}
              onChange={(e) => handleChange(e, "dividend")}
            />
          </td>
        </tr>
      </tbody>

    </table>
    <p>Total money needed: <b>{numberOfStocks * stockVal} USD</b></p>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          background: linear-gradient(45deg, #fbbe6b, #f13ea3);
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }


        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          box-shadow:rgb(0 0 0 / 9%) 0px 6px 10px 1px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }


        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;

          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
