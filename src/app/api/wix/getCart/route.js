import { createWixClient } from "@/utils/createWixClient";
import handleAuthentication from '@/utils/handleAuthentication';
import { NextResponse } from "next/server";

// GET method handler
export const GET = async (req) => {
    try {
        const authenticatedUserData = await handleAuthentication(req);
        if (!authenticatedUserData) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }

        const id = authenticatedUserData.cartId;
        const wixClient = await createWixClient();
        const response = await wixClient.cart.getCart(id);
        if (response) {
            delete response.subtotal;
            response.lineItems = response.lineItems.map((val) => {
                delete val.price;
                delete val.fullPrice;
                delete val.priceUndetermined;
                delete val.priceBeforeDiscounts;
                return val;
            });
        }
        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
