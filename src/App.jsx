import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>FIRST REACT APPLICATION</h1>
      <h2>What is React?</h2>
      <h3>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on components by Facebook Inc. It is
        maintained by Meta and a community of individual developers and
        companies. React can be used to develop single-page, mobile, or
        server-rendered applications with frameworks like Next.js.
      </h3>
      <ul class="demo">
        Members Name:
        <li>1. Siton, Edgardo A.</li>
        <li>2. Casia, Sweet Venice T.</li>
      </ul>
    </div>
  );
}

export default App;
