import useCurrency from "../hooks/useCurrency";
import AlertMessage from "./AlertMessage";
import "../styles/converter.css";

export default function CurrencyConverter() {
  let {
    setPriceCurrency,
    exchangedCurrency,
    exchange,
    currenciesList,
    setFrom,
    setTo,
    error,
    setError,
  } = useCurrency();

  if (error.exists)
    return (
      <AlertMessage
        title={"Erro!"}
        message={error.message}
        setMessage={setError}
      />
    );

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
            <option key={i} value={currency[0]} title={currency[1]}>
              {currency[0]}
            </option>
          ))}
        </select>
        <input
          className="data-input"
          type="text"
          onChange={(event) => {
            setPriceCurrency(event.target.value.trim().replace(",", "."));
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
            <option key={i} value={currency[0]} title={currency[1]}>
              {currency[0]}
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
