import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { RootState } from "../../store/store";

const Search = () => {
  const products = useSelector(
    (state: RootState) => state.products.filterProducts
  );

  return (
    <div className="p-3 py-20 animate-showUp">
      {products.length ? (
        products.map((item) => (
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
        ))
      ) : (
        <h2 className="text-center capitalize"> no item found </h2>
      )}
    </div>
  );
};

export default Search;
