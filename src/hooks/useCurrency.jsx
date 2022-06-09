import { useState, useEffect } from "react";

export default function useCurrency() {
  let [priceCurrency, setPriceCurrency] = useState("");
  let [data, setData] = useState("");
  let [exchangedCurrency, setExchangedCurrency] = useState(0.0);
  let [currenciesList, setCurrenciesList] = useState([
    ["selecione", "selecione"],
  ]);
  let [from, setFrom] = useState("");
  let [to, setTo] = useState("");
  let [error, setError] = useState({ exists: false, message: "" });

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
          if (json.error) {
            setError({ exists: true, message: json.error });
            return "";
          }

          let list = Object.entries(json.results);

          list = list.map((item) => [item[0], Object.values(item[1])[0]]);

          setCurrenciesList(
            list.sort((a, b) => {
              if (a < b) {
                return -1;
              } else {
                return true;
              }
            })
          );
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
        let exchangeCurrency = parseFloat(json[data]);
        setExchangedCurrency(
          (
            (isNaN(parseFloat(priceCurrency))
              ? 0.0
              : parseFloat(priceCurrency)) *
            (isNaN(exchangeCurrency) ? 0.0 : exchangeCurrency)
          ).toFixed(2)
        );
      });
  }

  return {
    setPriceCurrency,
    exchange,
    exchangedCurrency,
    currenciesList,
    setFrom,
    setTo,
    error,
    setError,
  };
}
