
import TileImage from "./TileImage";
import TilePrice from "./TilePrice";
import TileName from "./TileName";
import Buttom from "../common/Button";

interface TileProps {
    name: string
    price: number
    imagePath: string
}

function Tile({imagePath, name, price}: TileProps) {

    return (
        <div className="border bg-white p-2 gap-1 border-yellow-700 rounded-md flex flex-col">
            <TileImage imagePath={imagePath}/>
            <TileName name={name} />
            <TilePrice price={price}/>
            <Buttom>
                Olha só
            </Buttom>
        </div>
    );
}

export default Tile;