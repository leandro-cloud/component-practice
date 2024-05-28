import React from 'react'

export const MyComponent = () => {

  const name = 'Ines'
  const repository = 'https://github.com/inesmariao/com/component-practice'

  const student = {
    name: "Leandro",
    lastName: 'Peralta',
    mobile: "300000",
    linkedinProfile: "https://github.com/leandro-cloud/"
  }
  return (
    <div>
      <hr />
      <p>Este es mi Primer Componente</p>
      <h2>Temas de React</h2>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Componentes</li>
        <li>Estados</li>
        <li>Comunicacion</li>

      </ul>
      <hr />
      <h2>Datos del Docente</h2>
      <p>Nombre: {name}</p>
      <p>Repository</p>
      <p>{ repository }</p>
      <hr />
      <h2>Datos del Estudiante</h2>
      <p>Nombre: { student.name }</p>
      <p>Apellido: {student.lastName}</p>
      <p>celular: {student.mobile}</p>
      <p>Perfil de LindedIn:</p>
      <p>{ student.linkedinProfile}</p>



    </div>
  )
}
