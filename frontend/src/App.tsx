import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:3011/")
      .then((res) => res.text())
      .then(setMsg);
  }, []);

  return <h1>{msg || "Loading..."}</h1>;
}

export default App;
