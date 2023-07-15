export const Gift = ({ gift }) => {
    return (
                <img key={gift.id} className="gift" src={gift.images.downsized_medium.url} alt={gift.title} />
    )
}