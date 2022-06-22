import LoadingPage from "pages/LoadingPage";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Client, LineItemToAdd, Product } from "shopify-buy";
import checkoutState from "states/checkoutState";
import shopifyApiState from "states/shopifyApiState";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "./Event.module.scss";

interface Props {
  item: Product;
}

const Event = ({ item }: Props) => {
  const client = useRecoilValue(shopifyApiState);
  const checkoutId = useRecoilValue(checkoutState);

  const [counter, setCounter] = useState(1);
  const [clicked, setClicked] = useState(false);

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
        quantity: counter,
      },
    ];

    setClicked(true);

    addItemToCheckout(client, checkoutId, lineItems);
  };

  const getFormattedDescription = (description: string) => {
    const descriptionArr = description.split(";");
    const descComponent = descriptionArr.map((text: string) => {
      const finalText = text.trim();
      return (
        <p className="product-details__point" key={text}>
          <ReactMarkdown children={finalText} remarkPlugins={[remarkGfm]} />
          {/* {finalText} */}
        </p>
      );
    });
    return descComponent;
  };

  const Counter = () => {
    const increase = () => {
      setCounter((count) => count + 1);
    };

    const decrease = () => {
      setCounter((count) => count - 1);
    };

    return (
      <div className={styles["counter-container"]}>
        <button className={styles["counter-button"]} onClick={decrease} disabled={counter === 1}>
          -
        </button>
        <span className={styles["output"]}>{counter}</span>
        <button className={styles["counter-button"]} onClick={increase}>
          +
        </button>
      </div>
    );
  };

  if (clicked) {
    return <LoadingPage />;
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["images-container"]}>
        <img src={item.images[0].src} className={styles["primary-image"]} alt="sage img" />
      </div>
      <div className={styles["details-container"]}>
        <h1 className={styles["title"]}>{item.title}</h1>
        <p>{getFormattedDescription(item.description)}</p>
        <p className={styles["price"]}>${item.variants[0].price}</p>
        <Counter />
        <button className={styles["button"]} type="button" onClick={handleClick} disabled={clicked}>
          buy tickets
        </button>
      </div>
    </div>
  );
};

export default Event;
