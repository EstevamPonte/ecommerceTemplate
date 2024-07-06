export default class User {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    phone: string;
    password: string;
    email: string;

    constructor(
        id: string,
        name: string,
        phone: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.phone = phone;
        this.password = password;
        this.email = email;
    }
}
