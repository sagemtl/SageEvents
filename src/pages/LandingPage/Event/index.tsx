import { useRecoilValue } from "recoil";
import { Client, LineItemToAdd, Product } from "shopify-buy";
import checkoutState from "states/checkoutState";
import shopifyApiState from "states/shopifyApiState";

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
    console.log(lineItems);
    console.log(client);
    console.log(checkoutId);
    addItemToCheckout(client, checkoutId, lineItems);
  };

  return (
    <div>
      <button onClick={handleClick}>
        <img src={item.images[0].src} alt={item.title} />
      </button>
    </div>
  );
};

export default Event;
