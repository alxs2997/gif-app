/*primera forma de declarar un componente
//le asignamos un nombre a la función, en este caso el contenido de la función se llama app

*por convención el nombre de la función debe ser igual al nombre del archivo
*también se debe declarar con la primera letra en mayúscula
y si por ejemplo, ocupo más palabras se utiliza camelCase*/

//muy pocas cosas no son una función en react, por ejemplo:
/*
los objetos primitivos no son funciones como:
Los enteros, los chart, los strings, etc. 
*/ 

function App() {
  //un componente tiene 3 cosas:
  //1.Estado
  //2. Ciclo de vida
  
  //3. jsx o render html de la aplicación
  return (
    <div className="App">
      <h1>React App</h1>
    </div>
  )
}

export default App