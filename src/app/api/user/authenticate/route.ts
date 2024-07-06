import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
import User from "@/model/IUser";
import { cookies } from "next/headers";
import * as crypto from "crypto";

const prisma = new PrismaClient();

function exclude(user: User, keys: string[]) {
    return Object.fromEntries(
        Object.entries(user).filter(([key]) => !keys.includes(key))
    );
}

function encryptString(plaintext: string, publicKey: string) {
    // publicEncrypt() method with its parameters
    const encrypted = crypto.publicEncrypt(
        {
            key: publicKey,
        },
        Buffer.from(plaintext)
    );
    return encrypted.toString("base64");
}

function decryptString(ciphertext: string, privateKey: string) {
    // privateDecrypt() method with its parameters
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            passphrase: "",
        },
        Buffer.from(ciphertext, "base64")
    );

    return decrypted.toString("utf8");
}

async function createAuthOrUpdate(userId: string, privateKey: string) {
    const getUserAuth = await prisma.userAlth.findUnique({
        where: { userId: userId },
    });

    if (getUserAuth) {
        await prisma.userAlth.update({
            data: { privateKey },
            where: { userId },
        });
    } else {
        await prisma.userAlth.create({
            data: {
                privateKey,
                userId,
            },
        });
    }
}

export async function POST(request: NextRequest) {
    const res = await request.json();

    const user = await prisma.user.findUnique({
        where: {
            email: res.email,
        },
    });

    if (!user) {
        return Response.json(
            { error: "Email ou senha inválido" },
            { status: 404 }
        );
    }

    const passwordMatch = await compare(res.password, user.password);

    if (!passwordMatch) {
        return Response.json(
            { error: "Email ou senha inválido" },
            { status: 401 }
        );
    }

    const token = sign(
        {
            name: user.name,
        },
        "51dfd5bda8356ced09e100a297586a3d",
        {
            subject: String(user.id),
        }
    );

    const userWithoutPassword = exclude(user, ["password"]);

    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048, // Length of your key in bits
        publicKeyEncoding: {
            type: "spki", // Recommended to use 'spki' for the public key
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8", // Recommended to use 'pkcs8' for the private key
            format: "pem",
        },
    });

    const encryptedSessionData = encryptString(token, publicKey);

    const decryptedSessionData = decryptString(
        encryptedSessionData,
        privateKey
    );

    createAuthOrUpdate(user.id, privateKey);

    const sessionData = JSON.stringify({
        userId: user.id,
        encryptedSessionData,
    });

    cookies().set({
        name: "session",
        value: sessionData,
        maxAge: 60 * 60 * 24 * 7, // One week,
        httpOnly: true,
        path: "/",
    });

    return Response.json({ encryptedSessionData, decryptedSessionData, token });
}

// private key vai ser armazenada no BD
// vou mandar um objeto incriptado para o usuário
