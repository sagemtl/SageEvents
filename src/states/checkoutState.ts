import { atom, selector } from "recoil";

import shopifyApiState from "./shopifyApiState";

const checkoutState = atom({
  key: "checkoutState",
  default: selector({
    key: "checkoutState/default",
    get: async ({ get }) => {
      const client = get(shopifyApiState);
      const checkout = await client.checkout.create();
      console.log(checkout);
      return checkout.id;
    },
  }),
});

export default checkoutState;
