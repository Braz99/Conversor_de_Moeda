import "../styles/alert.css";

export default function AlertMessage({ title, message, setMessage }) {
  return (
    <div
      className="alert-container"
      onClick={() => setMessage({ exists: false, message: "" })}
    >
      <div className="alert">
        {title ? <h3 className="title">{title}</h3> : ""}
        <span className="message">{message}</span>
      </div>
    </div>
  );
}
