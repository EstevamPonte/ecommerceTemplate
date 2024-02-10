import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const user = await prisma.user.findFirst({
        where: {
            id: slug,
        },
        include: {
            address: true,
            wishList: {
                include: {
                    products: true,
                },
            },
        },
    });
    return Response.json(user);
}
