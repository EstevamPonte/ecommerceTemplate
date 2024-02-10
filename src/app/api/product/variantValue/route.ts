import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    const res = await request.json();
    const variantValue = await prisma.variantValue.create({
        data: {
            name: res.name,
            variantId: res.variantId,
        },
    });

    return Response.json(variantValue);
}
