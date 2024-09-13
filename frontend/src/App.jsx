import { useState } from "react";
import './App.css'
import axios from "axios";

function App() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:3000/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        //success
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };

  return (
    <div className="centered-form">
        <h1>Send an Email</h1>
      <input
        type="text"
        placeholder="Recipient Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type='text'
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      
      <textarea
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button onClick={sendMail}>Send Email</button>
    </div>
  );
}

export default App;