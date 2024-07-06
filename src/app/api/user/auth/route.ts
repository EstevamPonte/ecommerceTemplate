import { PrismaClient } from "@prisma/client";
import * as crypto from "crypto";
import { cookies } from "next/headers";
const prisma = new PrismaClient();

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

export async function GET(request: Request) {
    const url = new URL(request.url);

    const encryptedSessionData =
        url.searchParams.get("encryptedSessionData") || "";
    const userId = url.searchParams.get("userId") || "";

    const userAlth = await prisma.userAlth.findUnique({
        where: { userId: userId },
    });

    if (!userAlth) return Response.json({ success: false });

    const decryptedSessionData = decryptString(
        encryptedSessionData,
        userAlth.privateKey
    );
    return Response.json({ success: true, decryptedSessionData });
}
