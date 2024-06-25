import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, items } from "@wix/data";
import { members, badges } from "@wix/members";
import { cart } from "@wix/ecom";

export const createWixClient = async () => {
  try {
    const wixClient = await createClient({
      modules: {
        collections,
        members,
        badges,
        items,
        cart,
      },
      auth: OAuthStrategy({ clientId: "b23e4aca-f5ec-43d1-9457-fc6b44a80b78" }),
    });
    return wixClient;
  } catch (error) {
    console.error(error);
  }
};
