import TileImage from "./TileImage";
import TilePrice from "./TilePrice";
import TileName from "./TileName";
import Buttom from "../common/Button";
import Badge from "./Badge";
import Product from "@/model/Product";

interface Tile {
    value: Product;
}

function Tile(props: Tile) {
    const { badge, imagePath, name, price } = props.value;

    return (
        <div className="border bg-white p-2 gap-1 border-yellow-700 rounded-md flex flex-col relative">
            <div className="absolute top-0 left-0">
                <Badge name={badge} />
            </div>
            <TileImage imagePath={imagePath} />
            <TileName name={name} />
            <TilePrice price={price} />
            <Buttom>Olha só</Buttom>
        </div>
    );
}

export default Tile;
