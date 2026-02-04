import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const check = email.includes("@");
    setIsValid(check);
  }, [email]);

  function sendData() {
    if (!isValid) return;

    fetch("http://localhost:8081/verify", {
      method: "POST",
      headers: {                 
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log("server replied:", data);
        setResult(data);
      });
  }

  return (
    <div className="app">

      <div className="card">

        <h2>DMARC VERIFY</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={sendData}>Send</button>

        <p>you typed: {email}</p>
        <p>{isValid ? "EMAIL IS VALID" : "EMAIL IS INVALID"}</p>

      </div>

      {result && (
        <div className="result-card">
          <h3>DMARC RESULT</h3>
          <p><b>DMARC RECORD:</b> {result.dmarcRecord}</p>
          <p><b>DMARC PRESENT:</b> {result.isDmarc ? "YES" : "NO"}</p>
          <p><b>POLICY TYPE:</b> {result.dmarcType}</p>
        </div>
      )}

      <footer className="footer">
        <span>
          This prototype is created by&nbsp;
          <a
            href="https://github.com/BDZCDR69"
            target="_blank"
            rel="noreferrer"
            >
            Prince Rajpurohit
          </a>
            &nbsp;and&nbsp;
          <a
            href="https://github.com/Gitax18"
            target="_blank"
            rel="noreferrer"
            >
            Gitanshu Sankhla
          </a>
        </span>
      </footer>


    </div>
  );
}

export default App;
