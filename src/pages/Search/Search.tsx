import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { RootState } from "../../store/store";
import { useEffect } from "react";

const Search = () => {
  const products = useSelector(
    (state: RootState) => state.products.filterProducts
  );

  useEffect(() => {
    console.log({ products });
  }, [products]);

  return (
    <div className="p-3 py-20">
      {products.map((item) => (
        <Card
          layout="row"
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

export default Search;
