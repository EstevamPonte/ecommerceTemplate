export default class TileModel {
    #image: string;
    #name: string;
    #price: number;

    constructor(image: string, name: string, price: number) {
        this.#image = image;
        this.#name = name;
        this.#price = price;
    }

    get image() {return this.#image}
    
    get name() {return this.#name}

    get price() {return this.#price}

}