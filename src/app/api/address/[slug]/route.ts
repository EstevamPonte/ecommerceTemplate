import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(
    request: Request,
    { params }: { params: { slug: string } }
) {
    const res = await request.json();
    const slug = params.slug;

    const newAddress = await prisma.address.create({
        data: {
            cep: res.cep,
            city: res.city,
            neighborhood: res.neighborhood,
            street: res.street,
            userId: slug,
            number: res.number,
        },
    });

    return Response.json(newAddress);
}
