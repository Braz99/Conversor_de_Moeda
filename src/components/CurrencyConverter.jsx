import useCurrency from "../hooks/useCurrency";
import "../styles/converter.css";

export default function CurrencyConverter() {
  let {
    setPriceCurrency,
    setExchangedCurrency,
    exchangedCurrency,
    exchange,
    currenciesList,
    setFrom,
    setTo,
  } = useCurrency();

  return (
    <div className="converter">
      <div className="from-currency">
        <span className="from-currency-title">Moeda 1: </span>
        <select
          className="from-select"
          name="from"
          onChange={(event) => setFrom(event.target.value)}
        >
          {currenciesList.map((currency, i) => (
            <option key={i} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input
          className="data-input"
          type="text"
          onChange={(event) => {
            setPriceCurrency(event.target.value);
            if (event.target.value === "") {
              setExchangedCurrency(0.0);
            }
          }}
        />
      </div>

      <div className="to-currency">
        <span className="to-currency-title">Moeda 2:</span>
        <select
          className="to-select"
          name="to"
          onChange={(event) => setTo(event.target.value)}
        >
          {currenciesList.map((currency, i) => (
            <option key={i} value={currency}>
              {currency}
            </option>
          ))}
        </select>

        <input
          className="data-input"
          type="text"
          value={exchangedCurrency}
          readOnly={true}
        />
      </div>

      <button className="data-button" type="submit" onClick={exchange}>
        Converter
      </button>
    </div>
  );
}
