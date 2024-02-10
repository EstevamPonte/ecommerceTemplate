import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const users = await prisma.user.findMany({
        include: {
            address: true,
            wishList: {
                include: {
                    products: true,
                },
            },
        },
    });
    return Response.json(users);
}

export async function POST(request: NextRequest) {
    const res = await request.json();

    const userExists = await prisma.user.findFirst({
        where: { email: res.email },
    });

    if (userExists) {
        return Response.json({ error: "Emails ja existe" }, { status: 409 });
    }

    const password = await hash(res.password, 8);

    const newUser = await prisma.user.create({
        data: {
            email: res.email,
            name: res.name,
            password: `${password}`,
            phone: res.phone,
        },
    });

    return Response.json(newUser);
}
