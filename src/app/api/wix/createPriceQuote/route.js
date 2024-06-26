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

        const wixClient = createWixClient(); // Initialize your Wix client
        const response = await wixClient.cart.addToCart(authenticatedUserData.cartId, {
            lineItems,
        });

        // Modify the response object as needed
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
        console.error(error); // Logging the error can help in debugging
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
