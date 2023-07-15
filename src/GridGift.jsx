import { Gift } from "./Gift"

export const GridGift = ({gift}) => {
    return (
        <div className="contenedor">
            { /*Si el valor de gift es verdadero, entonces imprime el map*/
                gift && gift.map((gift) => {
                    return (
                        <Gift key={gift.id} gift={gift} />
                    )
                })
            }
        </div>
    )
}