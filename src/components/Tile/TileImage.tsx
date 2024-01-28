import bag from "@/assets/bag.png"

interface ImageTileProps {
    imagePath: string
}

function TileImage({imagePath}: ImageTileProps) {
    return (
        <img src={imagePath ?? bag} width={200} className="object-cover h-60 w-auto" height={500} alt="" />
    );
}

export default TileImage;