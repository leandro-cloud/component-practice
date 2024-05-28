import React from 'react'

export const Fourthcomponent = () => {

  const handleClicked = (e) => {
    alert('Has hecho click al boton!!')
  }

  const handleDoubleClick = (e) => {
    alert('Has hecho doble click al boton')
  }
  
  const handleMouseEnter = (e) => {
    console.log('Has entrado a la caja con el mouse')
  }

  const handleMouseLeave = (e) => {
    console.log("Has salido de la caja")
  }

  const handleMouse = (e, action) => {
    console.log(`Has ${action} la caja`)
  }

  const insedeInput = (e) => {
    console.log('Estas dentro del input, escribe tu nombre')
  }

  const outsideInput = (e) => {
    console.log('Estas dentro del input, escribe tu nombre')
  }

  return (
    <div>
      <h2>Eventos en react</h2>
      {/* evento click */}
      <div>
        <button onClick={ () => {
          console.log('Hola soy un evento click')
        }}>
          Haz Click!!!
        </button>
      </div>

      <div>
        <button onClick={handleClicked}>Aqui tambien has click</button>
      </div>
      {/* evento Double Click */}
      <div>
        <button onDoubleClick={ handleDoubleClick }>Haz doble click</button>
      </div>

      {/* evento mouse enter y nouse leave*/}
      <hr/>
      <div id='box'>
        <div id='box1'
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <p>Pasa el mouse por encima!!!</p>
        </div>

        <div id='box2'
          onMouseEnter={ (e) => handleMouse(e, 'entrado a') }
          onMouseLeave={ (e) => handleMouse(e, 'salido de') }
        >
          <p>Pasa el mouse por encima!!!</p>
        </div>

        <div id='box3'
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <p>Pasa el mouse por encima!!!</p>
        </div>
      </div>

      <div className='mt-4'>
        <input type='text' placeholder='Escribe tu nombre' onFocus={ insedeInput}  onBlur={outsideInput}  />
      </div>

      {/*  */}
    </div>
  )
}
