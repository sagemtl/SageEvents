import { selector } from "recoil";

import shopifyApiState from "./shopifyApiState";

const COLLECTION_ID = "gid://shopify/Collection/270207975517";

const productsState = selector({
  key: "productsState",
  get: async ({ get }) => {
    const client = get(shopifyApiState);
    const collection = await client.collection.fetchWithProducts(COLLECTION_ID);

    // @ts-ignore: Unreachable code error
    return collection.products as ShopifyBuy.Product[];
  },
});

export default productsState;
