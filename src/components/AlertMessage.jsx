import "../styles/alert.css";

export default function AlertMessage({ message, setMessage }) {
  return (
    <div
      className="alert-container"
      onClick={() => setMessage({ exists: false, message: "" })}
    >
      <div className="alert">
        <span className="message">{message}</span>
      </div>
    </div>
  );
}
