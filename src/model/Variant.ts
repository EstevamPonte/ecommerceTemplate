import VariantValue from "./VariantValue";

export default class Variant {
    #id: string;
    #name: string;
    #productId: string;
    #variantValues: VariantValue[] = [];

    constructor(
        id: string,
        name: string,
        productId: string,
        variantValues: VariantValue[]
    ) {
        this.#id = id;
        this.#name = name;
        this.#productId = productId;
        this.#variantValues = variantValues;
    }

    get id(): string {
        return this.#id;
    }

    get name(): string {
        return this.#name;
    }

    get productId(): string {
        return this.#productId;
    }

    get variantValues(): VariantValue[] {
        return this.#variantValues;
    }
}
