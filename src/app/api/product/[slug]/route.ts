import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const slug = params.slug;

    const product = await prisma.product.findFirst({
        where: {
            id: slug,
        },
    });

    return Response.json(product);
}
