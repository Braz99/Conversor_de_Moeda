import { useState, useEffect } from "react";

export default function useCurrency() {
  let [priceCurrency, setPriceCurrency] = useState(0.0);
  let [data, setData] = useState("");
  let [exchangedCurrency, setExchangedCurrency] = useState(0.0);
  let [currenciesList, setCurrenciesList] = useState(["Selecione"]);
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");

  let apiKey = process.env.REACT_APP_API_KEY;
  let url = `https://free.currconv.com/api/v7/convert?q=${data}&compact=ultra&apiKey=${apiKey}`;
  let currencies = `https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`;

  useEffect(
    () =>
      fetch(currencies)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setCurrenciesList(Object.keys(json.results));
        }),

    [currencies]
  );

  useEffect(() => setData(`${from}_${to}`), [from, to]);

  function exchange() {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let exchangeCurrency = json[data];
        setExchangedCurrency(
          (parseFloat(priceCurrency) * exchangeCurrency).toFixed(2)
        );
      });
  }

  return {
    setPriceCurrency,
    exchange,
    setExchangedCurrency,
    exchangedCurrency,
    currenciesList,
    setFrom,
    setTo,
  };
}
