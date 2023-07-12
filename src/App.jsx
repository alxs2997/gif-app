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

const nombre = 'Alexis'


const Ejemplo = <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Nulla asperiores autem tempore adipisci illo, ipsum debitis 
    consectetur <b>quidem odio voluptatem</b> dignissimos 
    suscipit dolorum fuga beatae iure officia. Molestiae,
     velit amet?
  </p>

const array = [1,2,'ana ', 'pedro ', 'juan ']


function App() {
  //un componente tiene 3 cosas:
  //1.Estado
  //2. Ciclo de vida
  
  //3. jsx o render html de la aplicación
  return ( //las llaves sirven para interpolar código js
    <div className="App"> 
      <h1>Hola {nombre}!</h1>

      {Ejemplo}
      {array}
      <br/>
      {2*5}
      <br/>
      {1003/4}
    </div>
  )
  //si dentro de las llaves hay jsx, lo imprime de forma natural,
  //si hay código js, lo ejecuta. 
}
//Cosas que no se pueden imprimir en jsx:

/*
*Los objetos
*Las funciones
*Los arrays
*Los booleanos
*Los null
*Los undefined
*/ 

export default App
