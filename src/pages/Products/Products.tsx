import { useEffect } from "react";
import Card from "../../components/Card/Card";
import { getProducts } from "../../service/user.service";
import { useDispatch } from "react-redux";
import { ProductsActions } from "../../store/products";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const data = await getProducts();

        if (!data) return;

        dispatch(ProductsActions.replaceCartInfo(data));
      } catch (error) {
        console.log({ error });
      }
    };

    getAllProducts();
  }, []);

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
