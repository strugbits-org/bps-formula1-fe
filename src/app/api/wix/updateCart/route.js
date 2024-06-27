import { createWixClient } from "@/utils/createWixClient";
import handleAuthentication from '@/utils/handleAuthentication';
import { NextResponse } from "next/server";

// POST method handler
export const POST = async (req) => {
    try {
        const authenticatedUserData = await handleAuthentication(req);
        if (!authenticatedUserData) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json()
        const { lineItems } = body;

        const wixClient = await createWixClient();
        const response = await wixClient.cart.updateCart(
            authenticatedUserData.cartId,
            { lineItems }
        );

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
