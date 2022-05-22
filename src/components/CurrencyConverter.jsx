import useCurrency from "../hooks/useCurrency";
import "../styles/converter.css";

export default function CurrencyConverter({ from, to }) {
  let { setPriceCurrency, exchangedCurrency, exchange } = useCurrency(from, to);

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
