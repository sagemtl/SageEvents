import { selector } from "recoil";
import Client from "shopify-buy";

const shopifyApiState = selector({
  key: "shopifyApiState",
  get: () => {
    const client = Client.buildClient({
      domain: "checkout.sageismism.com",
      storefrontAccessToken: "d6025d058e15bffbd46b54a46118fcd2",
    });

    return client;
  },
});

export default shopifyApiState;
