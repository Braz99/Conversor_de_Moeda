import { useState } from "react";
import "../styles/converter.css";

export default function CurrencyConverter({ from, to }) {
  let [PriceCurrency, setPriceCurrency] = useState(0.0);
  let [exchangedCurrency, setExchangedCurrency] = useState(0);

  let data = `${from}_${to}`;
  let url = `https://free.currconv.com/api/v7/convert?q=${data}&compact=ultra&apiKey=c0e646585b759fbb1ea0`;

  function exchange() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let exchangeCurrency = json[data];
        setExchangedCurrency(
          (parseFloat(PriceCurrency) * exchangeCurrency).toFixed(2)
        );
      });
  }

  return (
    <div className="converter">
      <h2>
        {from} para {to}
      </h2>

      <input
        className="data-input"
        type="text"
        onChange={(event) => {
          setPriceCurrency(event.target.value);
        }}
      />

      <button className="data-button" type="submit" onClick={exchange}>
        Converter
      </button>

      <h2>Valor convertido = {exchangedCurrency}</h2>
    </div>
  );
}
