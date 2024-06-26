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
        const { lineItemIds } = body;

        const wixClient = createWixClient();
        const response = await wixClient.cart.removeLineItems(
            authenticatedUserData.cartId,
            lineItemIds
        );

        delete response.cart.subtotal;
        response.cart.lineItems = response.cart.lineItems.map((val) => {
            delete val.fullPrice;
            delete val.price;
            delete val.priceBeforeDiscounts;
            delete val.priceUndetermined;
            return val;
        });

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
