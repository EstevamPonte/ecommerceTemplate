import Tile from "@/components/Tile";
import TileModel from "@/model/Tile";
export default function Home() {
    const tile1 = new TileModel("https://source.unsplash.com/random", "Cerâmica Bege", 10);
    const tile2 = new TileModel("https://source.unsplash.com/random", "Porcelanato Brilhante", 20);
    const tile3 = new TileModel("https://source.unsplash.com/random", "Mosaico de Vidro", 30);
    const tile4 = new TileModel("https://source.unsplash.com/random", "Azulejo Geométrico", 40);

    const tilesArray = [tile1, tile2, tile3, tile4];
    return (
        <div className="container m-auto">
            <h1 className="">Home Page</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {tilesArray.map(tile => {
                    return (
                        <Tile
                            imagePath={tile.image}
                            price={tile.price}
                            name={tile.name}
                        />
                    );
                })}
            </div>
        </div>
    );
}