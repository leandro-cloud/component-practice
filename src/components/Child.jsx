import React from 'react'

export const Child = ({ name, setName, addMessage }) => {

  const sendMessage = () => {
    addMessage("este es el mensaje del hijo")
  }

  const changeName = () => {
    setName('Leandro')
  }
  return (
    <div>
      {name}
      <div>
        <button onClick={sendMessage}>Enviar Mensaje</button>
        <button onClick={changeName}>Cambiar Nombre</button>
      </div>
    </div>
  )
}
