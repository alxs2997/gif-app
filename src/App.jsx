import { useState } from 'react';
import { Buscador } from './Buscador';
import { GridGift } from './GridGift';

function App() {
  //un componente tiene 3 cosas:
  //1.Estado:
  const [valorInput, setValorInput] = useState(''); //useState es un hook
  //Para consumir API de giphy
  const [gift, setGift] = useState([]);
  //2. Ciclo de vida

  //3. jsx o render html de la aplicación
  const onChange = (event) => {
    const Valor = event.target.value;
    setValorInput(Valor);
  }
  //HACEMOS UNA PETICIÓN A LA API DE GIPHY DE FORMA ASÍNCRONA
  const getGift = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7vxTpTlNCiR1wDc5NlXXyye8Vf3BjowA&q=${query}`;
    const response = await fetch(url);
    //await hace que la función se detenga hasta que la promesa se resuelva
    const data = await response.json();
    return data.data;
  }

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gift = await getGift(valorInput);
    setGift(gift);
  }


  //JSX
  return ( //las llaves sirven para interpolar código js
    <div className="App">

      <Buscador valorInput={valorInput} onChange={onChange} onSubmit={onSubmit}/>
      <GridGift gift={gift} />
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
