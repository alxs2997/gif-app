export const Buscador = ({onSubmit, valorInput, onChange}) => {
    return (
            <form onSubmit={onSubmit}>
                <label>Busca tú Gift: </label>
                <input type="text" onChange={onChange} value={valorInput} />
            </form>
    )
}