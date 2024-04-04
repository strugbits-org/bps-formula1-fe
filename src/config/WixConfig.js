import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, items } from "@wix/data";
import { members, authentication } from "@wix/members";
let wixClient = null;

const createWixClient = () => {
  const clientId = process.env.REACT_APP_WIX_CLIENT_ID;
  if (!wixClient) {
    wixClient = createClient({
      modules: { collections, items, members, authentication },
      auth: OAuthStrategy({ clientId }),
    });
  }
  return wixClient;
};

export default createWixClient;
