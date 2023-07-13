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
import { useState } from 'react';

function App() {
  //un componente tiene 3 cosas:
  //1.Estado:
  const [valorInput, setValorInput] = useState('');
  const onChange = (evento)=> {
    const valor = evento.target.value;
    setValorInput(valor);
  }
  //2. Ciclo de vida
  
  //3. jsx o render html de la aplicación
  return ( //las llaves sirven para interpolar código js
    <div className="App"> 
      <input value={valorInput} onChange={onChange} />
      <p>{valorInput}</p>
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
