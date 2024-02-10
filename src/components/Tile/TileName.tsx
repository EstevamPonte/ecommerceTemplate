interface TileNameProps {
    name: string
}

function TileName({ name }:TileNameProps) {
    return (
        <p className="text-sm text-yellow-800">{name}</p>
    );
}

export default TileName;