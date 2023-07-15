export const Gift = ({gift}) => {
    return (
        <div key={gift.id}>
            <img src={gift.images.downsized_medium.url} alt={gift.title} />
        </div>
    )
}