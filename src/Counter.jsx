import { useState } from "react";

export const Counter = () => {
    const [counter,setCounter] = useState(0);
    const onClick = () => {
        setCounter((estado)=>estado+1);//esto se encola porque es un proceso asincrono, en memoria este sería +1
        setCounter((estado)=>estado+1);//otra vez en cola... y si le sumo otro +1, sería +2
    }
    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={onClick}>Increment +2</button>
        </div>
    )
}
//El uso que se le puede dar a esta forma de crear callbacks es para cuando se necesita el estado anterior para modificar el nuevo estado, por ejemplo:
/*
Una app de supermercado, donde se tiene un carrito de compras, y se quiere agregar un producto al carrito,
entonces se tiene que hacer una función que reciba el estado 
anterior y le agregue el nuevo producto, 
y luego se le pasa al setCounter para que lo modifique en memoria y luego lo renderice en pantalla.
*/
export default Counter;