import { createWixClient } from "@/utils/createWixClient";
import handleAuthentication from '@/utils/handleAuthentication';
import { isAuthenticated } from '@/utils/isAuthenticated';
import { NextResponse } from "next/server";

// GET method handler
export const GET = async (req) => {
    try {
        const authenticatedUserData = await handleAuthentication(req);
        if (!authenticatedUserData) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        // const { skip, limit } = req.query;
        const skip = ''
        const limit = 50
        const wixClient = await createWixClient();

        const locationFilterVariantData = await wixClient.items
            .queryDataItems({
                dataCollectionId: "locationFilteredVariant",
                includeReferencedItems: ["category", "product", "subCategory", "f1Collection"],
                returnTotalCount: true,
            })

            .hasSome("f1Members", [authenticatedUserData.memberId])
            .eq("isF1", true)
            .skip(Number(skip) || 0)
            .limit(Number(limit) || 10)
            .find();

        if (locationFilterVariantData._items.length > 0) {
            locationFilterVariantData._items = locationFilterVariantData._items.map((val) => {
                val.data.variantData = val.data.variantData.map((val2) => {
                    delete val2.variant.discountedPrice
                    delete val2.variant.price
                    return val2
                })
                delete val.data.product.formattedDiscountedPrice
                delete val.data.product.discountedPrice
                delete val.data.product.formattedPrice
                delete val.data.product.price
                return val
            })
        }

        return NextResponse.json(locationFilterVariantData, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
};
