import StarIcon from "../../assets/icons/Star";
import ProductImage from "../../assets/images/productImage.png";
import Button from "../../components/Buttons/Button";

const SingleProduct = () => {
  return (
    <div className="container p-3.5 pt-20">
      <div className="overflow-hidden rounded-xl">
        <img src={ProductImage} alt="" className="object-cover w-full h-full" />
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

        <div className="flex items-center justify-between mt-4 actions">
          <div className="flex items-center gap-2.5 actions__btn">
            <div className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish add">
              -
            </div>
            <span className="text-base font-semibold">1</span>
            <div className="flex items-center justify-center duration-150 border rounded-full cursor-pointer w-7 h-7 border-grayish hover:border-blackish hover:text-blackish remove">
              +
            </div>
          </div>
          <div>
            <Button subject="Add to cart" extraBtnClass="px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
