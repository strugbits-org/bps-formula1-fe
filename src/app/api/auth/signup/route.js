import bcrypt from "bcryptjs";
import { createWixClient } from "@/utils/createWixClient";
import { NextResponse } from "next/server";

// Named export for POST method
export const POST = async (req) => {
  try {
    const body = await req.json();
    console.log("req: ", body);

    const {
      email,
      password,
      firstName,
      lastName,
      company,
      phone,
      hospitalityLoc,
    } = body;

    const wixClient = await createWixClient();

    const memberData = await wixClient.items
      .queryDataItems({
        dataCollectionId: "F1UsersData",
      })
      .eq("email", email)
      .find();

    if (memberData._items.length > 0) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const user = await wixClient.auth.register({ email, password });

    if (user.loginState === "SUCCESS" || user.errorCode === "emailAlreadyExists") {
      setTimeout(async () => {
        const payload = { loginEmail: email };
        const response = await fetch(`https://www.rentals.blueprintstudios.com/_functions/getMember`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to get member from Wix");
        }

        const json = await response.json();

        try {
          const cartResponse = await wixClient.cart.createCart({
            lineItems: [
              {
                catalogReference: {
                  appId: "215238eb-22a5-4c36-9e7b-e7c08025e04e",
                  catalogItemId: "1",
                },
                quantity: 1,
              },
            ],
          });

          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
          
          await wixClient.items.insertDataItem({
            dataCollectionId: "F1UsersData",
            dataItem: {
              data: {
                firstName,
                lastName,
                company,
                phone,
                hospitalityLoc,
                memberId: json.data.items[0]._id,
                email,
                password: hashedPassword,
                cartId: cartResponse._id,
              },
            },
          });

          // Email notification
          const emailOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contactId: "4c14f669-db2d-45c3-aa13-b69108cde0b2",
              variables: {
                name: `${firstName} ${lastName}`,
                email,
                company,
                phone,
                hospitalityLoc,
              },
            }),
          };

          await fetch(`${process.env.RENTALS_URL}/registerNotification`, emailOptions);
        } catch (error) {
          console.error(error);
        }
      }, 8000);

      return NextResponse.json({ message: "User registered successfully" });
    } else {
      return NextResponse.json({ error: `Server Error: ${user.loginState || 'Unknown error'}` }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
