import { useEffect } from "react";
import Card from "../../components/Card/Card";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <div className="container h-min overflow-hidden flex flex-col items-center justify-center gap-3 p-2.5 pt-20">
      {products.map((item) => (
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
    </div>
  );
};

export default Products;
