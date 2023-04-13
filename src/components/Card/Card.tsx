import React, { FC } from "react";
import StarIcon from "../../assets/icons/Star";
import ProductImage from "../../assets/images/productImage.png";
import { Link } from "react-router-dom";

interface CardProps {
  layout?: "row" | "col";
  addAble?: true | false;
}

const Card: FC<CardProps> = (props) => {
  const { layout, addAble } = props;

  if (layout === "row") {
    return (
      <Link to={"/products/1"}>
        <div className="p-3 mb-1.5 bg-white rounded-2xl card">
          <div className="flex gap-4">
            <div className="flex-1 overflow-hidden min-w-28 card__cover rounded-xl">
              <img
                src={ProductImage}
                alt="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-2.5 card__info">
              <div className="">
                <h2 className="flex items-center justify-between text-base font-semibold ">
                  iPhone 9
                </h2>

                <p className="mt-0.5 text-lighterBlackish first-letter:capitalize text-sm">
                  an apple mobile which is nothing like apple
                </p>
              </div>

              <div className="flex items-center justify-between mt-1.5">
                {!addAble && (
                  <div className="flex items-center gap-1 mt-3.5 mb-2.5 text-sm">
                    <div className="star">
                      <StarIcon />
                    </div>
                    4.69
                  </div>
                )}

                <h2 className="flex items-center justify-between text-base font-semibold">
                  $549
                </h2>
                {addAble && (
                  <div className="flex items-center gap-2.5 actions__btn">
                    <div className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish add">
                      -
                    </div>
                    <span className="text-base font-semibold">1</span>
                    <div className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish remove">
                      +
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={"/products/1"}>
      <div className="p-1 bg-white rounded-2xl card">
        <div className="overflow-hidden card__cover rounded-xl">
          <img
            src={ProductImage}
            alt="cover"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-2.5 card__info">
          <h2 className="flex items-center justify-between text-base ">
            <span className="font-semibold">iPhone 9</span>
            <span className="font-medium">$549</span>
          </h2>

          <p className="mt-0.5 text-lighterBlackish first-letter:capitalize text-sm">
            an apple mobile which is nothing like apple
          </p>

          <div className="flex items-center gap-1 mt-3.5 mb-2.5 text-sm">
            <div className="star">
              <StarIcon />
            </div>
            4.69
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
