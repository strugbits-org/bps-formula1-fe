import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, items } from "@wix/data";
import { members, authentication } from "@wix/members";
import { cart } from '@wix/ecom';
let wixClient = null;

const createWixClient = () => {
  const clientId = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
  if (!wixClient) {
    wixClient = createClient({
      modules: { collections, items, members, authentication, cart },
      auth: OAuthStrategy({ clientId }),
    });
  }
  return wixClient;
};

export default createWixClient;
