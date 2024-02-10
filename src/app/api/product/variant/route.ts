import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const res = await request.json();
    const variant = await prisma.variant.create({
        data: {
            name: res.name,
            productId: res.productId,
        },
    });

    return Response.json(variant);
}
