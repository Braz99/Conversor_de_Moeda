import { useState } from "react";

export default function useCurrency(from, to) {
  
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

  return {
    setPriceCurrency,
    exchange,
    exchangedCurrency,
  };
}
