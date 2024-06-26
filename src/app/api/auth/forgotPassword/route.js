import jwt from 'jsonwebtoken';
import { createWixClient } from "@/utils/createWixClient";
import { NextResponse } from "next/server";
import handleAuthentication from '@/utils/handleAuthentication';

// POST method handler
export const POST = async (req) => {
  try {
    const authenticatedUserData = await handleAuthentication(req);
    if (!authenticatedUserData) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json()
    const { email } = body;
    const wixClient = await createWixClient();
    const memberData = await wixClient.items
      .queryDataItems({
        dataCollectionId: "F1UsersData",
      })
      .eq("email", email)
      .find();

    if (memberData._items.length === 0) {
      return NextResponse.json({ error: "Email not found" }, { status: 404 });
    }

    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "30m" });
    const origin = req.headers.origin; // we will have to check the origin
    const resetUrl = `${origin}/reset-password?token=${token}`;

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        memberId: memberData._items[0].data.memberId,
        variables: { name: memberData._items[0].data.firstName, link: resetUrl },
      }),
    };

    const response = await fetch(`${process.env.RENTALS_URL}/resetPassword`, options);
    if (!response.ok) {
      return NextResponse.json({ error: "Email could not be sent" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email has been sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
