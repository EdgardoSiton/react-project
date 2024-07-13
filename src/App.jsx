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
      <h3>1. Edgardo A.Siton</h3>
      <h3>2. SweetVenice T. Casia</h3>
      <h3>
        Note: Make sure to change the Web App Name that appears in browser tab
      </h3>
    </div>
  );
}

export default App;
