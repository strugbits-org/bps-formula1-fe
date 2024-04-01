import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, items } from "@wix/data";

let wixClient = null;

const createWixClient = () => {
  const clientId = process.env.REACT_APP_WIX_CLIENT_ID;
  if (!wixClient) {
    wixClient = createClient({
      modules: { collections, items },
      auth: OAuthStrategy({ clientId }),
    });
  }
  return wixClient;
};

export default createWixClient;
