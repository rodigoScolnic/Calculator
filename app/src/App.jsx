import { useState } from 'react'
import Swal from 'sweetalert2'
import './App.css'

function App() {

  const [input, setInput] = useState('')
  const [saved, setSaved] = useState('')
  const [history, setHistory] = useState([])

  /* Funciones de botonera numerica y operacional */

  const handleClick = (event) => {
    const value = event.target.value;
    setInput(input + value);
  }

  const calculate = () => {
  setInput(eval(input).toString())
  }

  const save = () => {
    setSaved(input)
    history.push(input)
  }

  const handleBtnSave = () => {
    if(input != ''){
      return <button className='large-btn' onClick={save}>S</button>
    }else{
      return <button className='large-btn' disabled>S</button>
    }
  }

  const clear = () => {
    setInput('')
  }

  /* Funciones del hisotrial */

  const handleHistoryClick = (event) => {
    const data = (event.target.value)
    setInput(data)
  }

  const handleBtnHistory = () => {
    if(history.length != 0){
      return <button onClick={handleDeleteHistory}>delete history</button>
    }else{
      return <button disabled>history empty</button>
    }
  }

  const handleDeleteHistory = () => {
    setHistory([]);
  }

  
  return (
    <>
    <div className="App">
      <div className="display">
        <p>{input}</p>
      </div>
      <div className="buttons-container">
        <div className="buttons-row">
          <button onClick={clear} value="clear">C</button>
          { handleBtnSave() }
          <button onClick={handleClick} value="/">/</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleClick} value="7">7</button>
          <button onClick={handleClick} value="8">8</button>
          <button onClick={handleClick} value="9">9</button>
          <button onClick={handleClick} value="*">X</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleClick} value="4">4</button>
          <button onClick={handleClick} value="5">5</button>
          <button onClick={handleClick} value="6">6</button>
          <button onClick={handleClick} value="-">-</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleClick} value="1">1</button>
          <button onClick={handleClick} value="2">2</button>
          <button onClick={handleClick} value="3">3</button>
          <button onClick={handleClick} value="+">+</button>
        </div>
        <div className="buttons-row">
          <button onClick={handleClick} value="0" className='large-btn'>0</button>
          <button onClick={handleClick} value=".">.</button>
          <button onClick={calculate} value="equal">=</button>
        </div>
      </div>
      <h2>calculator by <br /> Rodrigo Scolnic</h2>
    </div>
    <div className="history">
      { handleBtnHistory() }
      <div className="history-list">
        {history.map(( e, i ) => 
          <button onClick={handleHistoryClick} value={e} className="list-item">
            {i+1} : {e}
          </button> 
        )}
      </div>
    </div>
    </>
  )
}

export default App
