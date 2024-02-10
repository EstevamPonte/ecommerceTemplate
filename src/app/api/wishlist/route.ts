import { PrismaClient } from "@prisma/client";
import { type NextRequest } from "next/server";
const prisma = new PrismaClient();

export async function POST(
    request: NextRequest,
    { params }: { params: { slug: string } }
) {
    const userId = request.nextUrl.searchParams.get("userId");
    const productId = request.nextUrl.searchParams.get("productId");

    if (!userId || !productId) return;

    const userWishlist = await prisma.wishList.findFirst({
        where: {
            userId: userId,
        },
    });

    if (userWishlist) {
        const updatedWishList = await prisma.wishList.update({
            data: {
                products: {
                    connect: {
                        id: productId,
                    },
                },
            },
            where: {
                userId: userId,
            },
            include: {
                products: true,
            },
        });
        return Response.json(updatedWishList);
    }

    const wishList = await prisma.wishList.create({
        data: {
            userId: userId,
            products: {
                connect: {
                    id: productId,
                },
            },
        },
    });

    return Response.json(wishList);
}

export async function GET(request: NextRequest) {
    const userId = request.nextUrl.searchParams.get("userId");
    if (!userId) return;

    const userWishlist = await prisma.wishList.findFirst({
        where: {
            userId: userId,
        },
        include: {
            products: true,
        },
    });

    return Response.json(userWishlist);
}

export async function DELETE(request: NextRequest) {
    const userId = request.nextUrl.searchParams.get("userId");
    const productId = request.nextUrl.searchParams.get("productId");
    if (!userId || !productId) return;

    const userWishlist = await prisma.wishList.update({
        data: {
            products: {
                disconnect: {
                    id: productId,
                },
            },
        },
        where: {
            userId: userId,
        },
    });

    return Response.json(userWishlist);
}
