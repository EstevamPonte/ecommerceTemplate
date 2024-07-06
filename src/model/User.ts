export default class User {
    #id: string;
    #name: string;
    #createdAt: Date;
    #updatedAt: Date;
    #phone: string;
    #password: string;
    #email: string;

    constructor(
        id: string,
        name: string,
        phone: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.#id = id;
        this.#name = name;
        this.#createdAt = createdAt;
        this.#updatedAt = updatedAt;
        this.#phone = phone;
        this.#password = password;
        this.#email = email;
    }

    get id(): string {
        return this.#id;
    }

    get name(): string {
        return this.#name;
    }

    get createdAt(): Date {
        return this.#createdAt;
    }

    get updatedAt(): Date {
        return this.#updatedAt;
    }

    get phone(): string {
        return this.#phone;
    }

    get email(): string {
        return this.#email;
    }

    get password() {
        return this.#password;
    }
}
