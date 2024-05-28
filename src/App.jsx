import logo from './logo.svg';
import './App.css';
import { MyComponent } from './components/MyComponent';
import { SecondComponent } from './components/SecondComponent';
import { ThirdComponent } from './components/ThirdComponent';
import { useState } from 'react';
import { Child } from './components/Child';
import { Fourthcomponent } from './components/Fourthcomponent';

function App() {

  const [name, setName] = useState("Lina")
  const [message, setMessage] = useState("")

  const addMessage = (message) => {
    console.log(message)
    setMessage(message)
  }

  const medicalRecord = {
    height: "160",
    blood: "rhO+",
    allergies: 'none'

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <hr />
        <Fourthcomponent />
        <div>
          <hr />
          <h2>Mensaje del hijo: </h2>
          <p>{ message }</p>
        </div>
        <Child name={name} addMessage={addMessage} setName={setName} />
        <ThirdComponent 
          name='Leandro'
          lastName='Peralta'
          card={medicalRecord}
          />
        <SecondComponent />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
