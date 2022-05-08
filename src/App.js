import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="App">
      <CurrencyConverter moedaA="BRL" moedaB="USD" />
      <CurrencyConverter moedaA="USD" moedaB="BRL" />
    </div>
  );
}

export default App;
