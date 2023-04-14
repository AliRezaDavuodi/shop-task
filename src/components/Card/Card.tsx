import React, { FC } from "react";
import StarIcon from "../../assets/icons/Star";
import { Link } from "react-router-dom";
import { cartActions } from "../../store/cart";
import { useDispatch } from "react-redux";

interface CardProps {
  layout?: "row" | "col";
  addAble?: true | false;
  title: string;
  desc?: string;
  rank?: number;
  image: string;
  price?: number;
  id: number;
  amount?: number;
}

const Card: FC<CardProps> = (props) => {
  const { layout, addAble, desc, image, price, rank, title, id, amount } =
    props;

  const dispatch = useDispatch();

  const increaseAmountHandler = () => {
    dispatch(cartActions.addItemToCart(props));
  };
  const decreaseAmountHandler = () => {
    dispatch(cartActions.decreaseItem(props));
  };

  if (layout === "row") {
    return (
      <div className="w-full">
        <div className="p-3 mb-1.5 bg-white rounded-2xl card">
          <div className="flex gap-4">
            <div className="flex-1 overflow-hidden min-w-28 card__cover rounded-xl">
              <Link to={"/products/" + id}>
                <img
                  src={image}
                  alt="cover"
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <div className="mt-2.5 card__info">
              <div className="">
                <h2 className="flex items-center justify-between text-base font-semibold ">
                  {title}
                </h2>

                <p className="mt-0.5 text-lighterBlackish first-letter:capitalize text-sm">
                  {desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-1.5">
                {!addAble && (
                  <div className="flex items-center gap-1 mt-3.5 mb-2.5 text-sm">
                    <div className="star">
                      <StarIcon />
                    </div>
                    {rank}
                  </div>
                )}

                <h2 className="flex items-center justify-between text-base font-semibold">
                  ${price}
                </h2>
                {addAble && (
                  <div className="flex items-center gap-2.5 actions__btn">
                    <div
                      onClick={decreaseAmountHandler}
                      className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish add"
                    >
                      -
                    </div>
                    <span className="text-base font-semibold">
                      {amount || 1}
                    </span>
                    <div
                      onClick={increaseAmountHandler}
                      className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish remove"
                    >
                      +
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link to={"/products/" + id} className="w-full">
      <div className="p-1 bg-white rounded-2xl card">
        <div className="h-48 overflow-hidden card__cover rounded-xl bg-grayish">
          <img
            src={image}
            alt="cover"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="mt-2.5 card__info">
          <h2 className="flex items-center justify-between text-base ">
            <span className="font-semibold">{title}</span>
            <span className="font-medium">${price}</span>
          </h2>

          <p className="mt-0.5 text-lighterBlackish first-letter:capitalize text-sm">
            {desc}
          </p>

          <div className="flex items-center gap-1 mt-3.5 mb-2.5 text-sm">
            <div className="star">
              <StarIcon />
            </div>
            {rank}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
