export const Buscador = ({onSubmit, valorInput, onChange}) => {
    return (
            <form className="form-buscador" onSubmit={onSubmit}>
                <label className="label">Busca tú Gift: </label>
                <input className="busca" type="text" placeholder="Ingresa tú busqueda..." onChange={onChange} value={valorInput} />
            </form>
    )
}