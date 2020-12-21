import { useEffect, useState } from "react"

import './App.css';

function App() {
  const [dreams, setDreams] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3001/dreams")
    .then(results => results.json())
    .then(dreams => {
      dream = dreams
    })
  }, [])

  return (
    <div className="App">
      <p>{!dream ? "Loading..." : dream}</p>
    </div>
  );
}

export default App;
