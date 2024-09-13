import { useState } from "react";
import './App.css'
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendMail = () => {
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    setError(""); // Clear previous errors

    axios
    // .get("http://localhost:3000/", {
     .get("https://nodemailer-backend-ch8i.onrender.com/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        alert("Successfully sent an email!");
      })
      .catch(() => {
        alert("Failed to send an email!");
      });
  };

  return (
    <div className="centered-form">
      <h1>Send an Email</h1>
      <input
        type="email"
        placeholder="Recipient Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='text'
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMail}>Send Email</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
