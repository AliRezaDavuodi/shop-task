import { useParams } from "react-router-dom";
import StarIcon from "../../assets/icons/Star";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";
import { getSingleProduct } from "../../service/user.service";
import { productsType } from "../../@types/service/products";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const SingleProduct = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState<productsType>();
  const [amountInCart, setAmountInCart] = useState(0);

  const cart = useSelector((state: RootState) => state.cart.basket);

  useEffect(() => {
    if (id)
      setAmountInCart(
        () => cart.find((item) => item.id === (+id as number))?.amount || 0
      );
  }, [cart, id]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await getSingleProduct(id || "1");

        if (!data) return;

        setProduct(data);
      } catch (error) {
        console.log({ error });
      }
    };

    getProduct();
  }, []);

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(product));
  };

  const increaseAmountHandler = () => {
    dispatch(cartActions.increaseItem(product));
  };
  const decreaseAmountHandler = () => {
    dispatch(cartActions.decreaseItem(product));
  };

  return (
    <div className="container p-3.5 pt-20">
      <div className="overflow-hidden rounded-xl">
        <img
          src={product?.images[0]}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-2.5 card__info">
        <h2 className="flex items-center justify-between text-base ">
          <span className="font-semibold">{product?.title}</span>
          <span className="font-medium">${product?.price}</span>
        </h2>

        <p className="mt-0.5 text-lighterBlackish first-letter:capitalize text-sm">
          {product?.description}
        </p>

        <div className="flex items-center gap-1 mt-3.5 mb-2.5 text-sm">
          <div className="star">
            <StarIcon />
          </div>
          {product?.rating}
        </div>

        <div className="flex items-center justify-between mt-4 actions">
          <div className="flex items-center gap-2.5 actions__btn">
            <div
              onClick={decreaseAmountHandler}
              className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish add"
            >
              -
            </div>
            <span className="text-base font-semibold">{amountInCart}</span>
            <div
              onClick={increaseAmountHandler}
              className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish remove"
            >
              +
            </div>
          </div>
          <div onClick={addToCartHandler}>
            <Button subject="Add to cart" extraBtnClass="px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
