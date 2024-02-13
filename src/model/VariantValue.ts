export default class VariantValue {
    #id: string;
    #name: string;
    #variantId: string;

    constructor(id: string, name: string, variantId: string) {
        this.#id = id;
        this.#name = name;
        this.#variantId = variantId;
    }

    get id(): string {
        return this.#id;
    }

    get name(): string {
        return this.#name;
    }

    get variantId(): string {
        return this.#variantId;
    }
}
