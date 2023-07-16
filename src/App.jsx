import { Buscador } from './Buscador';
import { GridGift } from './GridGift';
import { useSearchGift } from './useSearchGift';

function App() {
  //valor:
  const {valorInput, onChange, onSubmit, gift, estaCargando} = useSearchGift();

  //JSX
  return ( //las llaves sirven para interpolar código js
    <div className="App">

      <Buscador valorInput={valorInput} onChange={onChange} onSubmit={onSubmit}/>
      
      { //si la variable cargando es verdadera, imprime el div con la clase loader-container
        estaCargando ?
          //se puede hacer con o sin parentesis
          ( <div className="loader-container">
          <div className="loader"></div>
          </div>)
          //si no (es falso), imprime los gifts que buscamos

          :
          //tambien se puede hacer sin los parentesis
          (<GridGift gift={gift}/>)
      }
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
