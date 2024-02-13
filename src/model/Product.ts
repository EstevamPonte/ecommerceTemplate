import Variant from "./Variant";

export default class Product {
    #id: string = "";
    #name: string = "";
    #description: string = "";
    #badge: string = "";
    #price: number = 0;
    #variants: Variant[] = [];
    #imagePath: string = "";

    constructor(
        name: string,
        price: number,
        id: string,
        description: string,
        badge: string,
        variants: Variant[],
        imagePath: string
    ) {
        this.#name = name || "";
        this.#price = price || 0;
        this.#id = id || "";
        this.#description = description || "";
        this.#badge = badge || "";
        this.#variants = variants || "";
        this.#imagePath = imagePath || "";
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    get id() {
        return this.#id;
    }

    get description() {
        return this.#description;
    }

    get badge() {
        return this.#badge;
    }

    get variants() {
        return this.#variants;
    }

    get imagePath() {
        return this.#imagePath;
    }
}
