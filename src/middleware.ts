import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";

interface IPayload {
    sub: string;
}

const protectedRoutes = ["/dashboard", "/api/product"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);

    if (isProtectedRoute) {
        const authToken = request.headers.get("authorization");

        if (!authToken)
            return NextResponse.json(
                { error: "Não autorizado" },
                { status: 403 }
            );

        const [, token] = authToken.split(" ");
        try {
            const { sub } = verify(
                token,
                "51dfd5bda8356ced09e100a297586a3d"
            ) as IPayload;

            return NextResponse.next();
        } catch (error) {
            return NextResponse.json(
                { error: "Não autorizado" },
                { status: 403 }
            );
        }
    }

    console.log(path);
    // return null;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api/user/auth|_next/static|_next/image|favicon.ico).*)",
    ],
};
