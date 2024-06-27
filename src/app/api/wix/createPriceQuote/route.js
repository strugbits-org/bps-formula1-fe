import { createWixClient } from "@/utils/createWixClient";
import handleAuthentication from '@/utils/handleAuthentication';
import { NextResponse } from "next/server";

// Helper function to handle fetch requests
async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
}

// POST method handler
export const POST = async (req) => {
  try {
    const authenticatedUserData = await handleAuthentication(req);
    if (!authenticatedUserData) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json()
    const { lineItems } = body;
    const lineItemsIdArr = lineItems.map(item => item.id);
    const requestBody = {
      loginEmail: authenticatedUserData.email
    };

    // Fetch member data
    const memberData = await fetchData(`${process.env.RENTALS_URL}/getMember`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });

    if (memberData.data.items.length === 0) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    // Create price quote payload
    const payload = {
      title: `F1 - ${authenticatedUserData.company} - ${authenticatedUserData.hospitalityLoc}`,
      customer: {
        email: authenticatedUserData.email,
        contactId: memberData.data.items[0]._id,
      },
      lineItems,
      paymentTerms: {
        termType: "DueOnReceipt",
      },
      dates: {
        issueDate: new Date(),
        validThroughDate: new Date(new Date().setDate(new Date().getDate() + 30)),
      },
    };

    // Send payload to create price quote
    const response = await fetchData(`${process.env.RENTALS_URL}/priceQuote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const wixClient = await createWixClient();
    // Store the price quote in Wix Data Collection
    wixClient.items.insertDataItem({
      dataCollectionId: "F1RequestQuote",
      dataItem: {
        data: {
          ...payload,
          eventLocation: payload.title,
          memberId: memberData.data.items[0]._id,
          quoteNumber: response.quote.number,
        },
      },
    });

    // Remove line items from the cart
    wixClient.cart.removeLineItems(authenticatedUserData.cartId, lineItemsIdArr);

    // Return success message
    return NextResponse.json({
      message: "Price Quote Created",
      quoteNumber: response.quote.number,
    }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};