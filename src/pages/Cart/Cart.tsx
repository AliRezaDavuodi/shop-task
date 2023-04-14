import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Button";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useState } from "react";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.basket);

  const [total, setTotal] = useState({
    count: 0,
    price: 0,
  });

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, cur) => acc + cur.price * (cur.amount || 1),
      0
    );
    const totalCount = cart.reduce((acc, cur) => acc + (cur.amount || 1), 0);

    setTotal({
      count: totalCount,
      price: totalPrice,
    });
  }, [cart]);

  return (
    <div className="bg-white">
      <div className="container animate-showUp p-3.5 pt-20">
        {cart.map((item) => (
          <Card
            layout="row"
            addAble
            key={item.id}
            desc={item.description}
            title={item.title}
            image={item.images[0]}
            price={item.price}
            id={item.id}
            rank={item.rating}
            amount={item.amount}
          />
        ))}

        <div className="py-6 mt-6 border-t border-blackish">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Product Count:</h2>
            <span className="text-sm font-medium">{total.count}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Total:</h2>
            <span className="text-sm font-medium">${total.price}</span>
          </div>

          <div className="">
            <Button
              subject="pay via paypal"
              extraBtnClass="capitalize font-normal"
              disabled={total.count === 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
