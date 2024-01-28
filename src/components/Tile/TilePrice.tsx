interface TilePriceProps {
    price: number
}

function TilePrice({price}: TilePriceProps) {
    return (
        <p className="font-bold">R${price}</p>
    );
}

export default TilePrice;