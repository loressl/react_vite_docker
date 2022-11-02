import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.docker.com/" target="_blank">
          <img src="/docker.svg" className="logo react" alt="Docker logo" />
        </a>
      </div>
      <h1>Vite + React + Docker</h1>
      <p className="read-the-docs">
        Aplicação demonstrativa utilizando React, Vite e Docker.
      </p>
    </div>
  )
}

export default App
