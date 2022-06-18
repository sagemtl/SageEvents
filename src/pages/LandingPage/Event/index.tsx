import { useRecoilValue } from "recoil";
import { Client, LineItemToAdd, Product } from "shopify-buy";
import checkoutState from "states/checkoutState";
import shopifyApiState from "states/shopifyApiState";

import styles from "./Event.module.scss";

import logo from "../../../assets/logo-run.gif";

interface Props {
  item: Product;
}

const Event = ({ item }: Props) => {
  const client = useRecoilValue(shopifyApiState);
  const checkoutId = useRecoilValue(checkoutState);

  const addItemToCheckout = (
    client: Client,
    checkoutId: string | number,
    items: LineItemToAdd[]
  ) => {
    client.checkout.addLineItems(checkoutId, items).then((checkout) => {
      window.location.href = checkout.webUrl;
    });
  };

  const handleClick = () => {
    const lineItems = [
      {
        variantId: item.variants[0].id,
        quantity: 1,
      },
    ];

    addItemToCheckout(client, checkoutId, lineItems);
  };

  return (
    <>
      <img src={logo} alt="logo" className={styles["logo"]} />
      <div onClick={handleClick} className={styles["container"]}>
        <button onClick={handleClick} className={styles["button"]}>
          <img src={item.images[0].src} alt={item.title} className={styles["poster"]} />
        </button>
      </div>
    </>
  );
};

export default Event;
