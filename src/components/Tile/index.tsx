import TileImage from "./TileImage";
import TilePrice from "./TilePrice";
import TileName from "./TileName";
import TileButton from "./TileButton";

interface TileProps {
    name: string
    price: number
    imagePath: string
}

function Tile({imagePath, name, price}: TileProps) {
    return (
        <div className="border bg-slate-50 p-2 gap-1 border-slate-200 rounded-md flex flex-col">
            <TileImage imagePath={imagePath}/>
            <TileName name={name} />
            <TilePrice price={price}/>
            <TileButton />
        </div>
    );
}

export default Tile;