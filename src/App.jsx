<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./state";
import { Contact } from "./Steps/Contact";
import { Education } from "./Steps/Education";
import { About } from "./Steps/About";
import { Confirm } from "./Steps/Confirm";
import { Stepper } from "./Steps/Stepper";

export const App = () => {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Stepper />
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/education" element={<Education />} />
            <Route path="/about" element={<About />} />
            <Route path="/confirm" element={<Confirm />} />
          </Routes>
        </Router>
      </AppProvider>
    </div>
  );
};

=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 59da55a7678667fd9a829d8386734d393349d9c6
