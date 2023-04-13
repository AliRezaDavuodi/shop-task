import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Button";

const Cart = () => {
  return (
    <div className="bg-white ">
      <div className="container p-3.5 pt-20">
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />
        <Card layout="row" addAble />

        <div className="py-6 mt-6 border-t border-blackish">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Product Count:</h2>
            <span className="text-sm font-medium">3</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Total:</h2>
            <span className="text-sm font-medium">$1,450</span>
          </div>

          <div className="">
            <Button
              subject="pay via paypal"
              extraBtnClass="capitalize font-normal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
