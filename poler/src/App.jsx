import { useState } from 'react'
import PaymentFlow from './pages/PaymentFlow'
import './styles/index.scss'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Assessment Test</h2>
      <div>
        <a href="/paymentflow">Payment Flow Design (Task 1)</a>
        <a href="/covid">Coved API (Task 2)</a>
      </div>
    </div>
  )
}

export default App
