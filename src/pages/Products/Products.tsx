import Card from "../../components/Card/Card";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Loader from "../../components/Loader/Loader";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);

  const status = useSelector((state: RootState) => state.products.status);

  return (
    <div className="container animate-showUp bg-grayish overflow-hidden flex flex-col items-center justify-center gap-3 p-2.5 pt-20">
      {status.success &&
        products.map((item) => (
          <Card
            key={item.id}
            desc={item.description}
            title={item.title}
            image={item.images[0]}
            price={item.price}
            id={item.id}
            rank={item.rating}
          />
        ))}
      {status.success && products.length === 0 && (
        <h2 className="text-center capitalize"> no item to display </h2>
      )}
      {status.pending && (
        <>
          <Loader />
          <Loader />
          <Loader />
          <Loader />
        </>
      )}
      {status.err && (
        <h2 className="text-center capitalize"> sth went wrong </h2>
      )}
    </div>
  );
};

export default Products;
