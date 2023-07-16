import { useState } from "react";

export const useSearchGift = () => {
    //1.Estado:
  const [valorInput, setValorInput] = useState(''); //useState es un hook
  //Para consumir API de giphy
  const [gift, setGift] = useState([]);
  const [estaCargando, setCargando] = useState(false);


    //2.Funciones:
  const onChange = (event) => {
    const Valor = event.target.value;
    setValorInput(Valor);
  }
  //HACEMOS UNA PETICIÓN A LA API DE GIPHY DE FORMA ASÍNCRONA
  const getGift = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7vxTpTlNCiR1wDc5NlXXyye8Vf3BjowA&q=${query}`;
    setCargando(true);
    await new Promise (resolve => setTimeout(resolve, 1000));
    const response = await fetch(url);
    //await hace que la función se detenga hasta que la promesa se resuelva
    const data = await response.json();
    setCargando(false);
    return data.data;
  }

  const onSubmit = async (evento) => {
    evento.preventDefault();
    const gift = await getGift(valorInput);
    setGift(gift);
  }

    return {
        onSubmit,
        onChange,
        valorInput,
        gift,
        estaCargando
    }
}