interface TileNameProps {
    name: string
}

function TileName({ name }:TileNameProps) {
    return (
        <p className="text-sm">{name}</p>
    );
}

export default TileName;