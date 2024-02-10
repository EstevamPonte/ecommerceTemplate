import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function GET(request: Request) {
    const products = await prisma.product.findMany({
        include: {
            variants: {
                include: {
                    variantValues: true,
                },
            },
        },
    });

    return Response.json(products);
}

export async function POST(request: NextRequest) {
    const res = await request.json();
    const product = await prisma.product.create({
        data: {
            name: res.name,
            badge: res.badge,
            description: res.description,
            price: res.price,
        },
    });

    return Response.json(product);
}
