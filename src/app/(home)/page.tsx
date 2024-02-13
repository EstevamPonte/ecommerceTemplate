"use client";
import Tile from "@/components/Tile";
import { useQuery } from "@tanstack/react-query";
import Product from "@/model/Product";

export default function Home() {
    const { data } = useQuery({
        queryKey: ["product"],
        queryFn: async function () {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/product"
                );
                const product = (await response.json()) as Product[];
                return product;
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <div className="container m-auto">
            <h1 className="">Home Page</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {data?.map((tile) => {
                    return <Tile key={tile.id} value={tile} />;
                })}
            </div>
        </div>
    );
}
