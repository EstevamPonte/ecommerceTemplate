interface TilePriceProps {
    price: number
}

function TilePrice({price}: TilePriceProps) {
    return (
        <p className="font-bold text-yellow-800">R${price}</p>
    );
}

export default TilePrice;