import { useRecoilValue } from "recoil";
import productsState from "states/productsState";
import Event from "./Event";

// import styles from "./Shop.module.scss";

const LandingPage: React.FC = () => {
  const products = useRecoilValue(productsState);
  console.log(products);

  return (
    <div>
      {products.map((item) => (
        <Event item={item} />
      ))}
    </div>
  );
};

export default LandingPage;
