import React, { useEffect } from "react";
import Routes from "../routes";

import { useDispatch } from "react-redux";
import { getProducts } from "../service/user.service";
import { ProductsActions } from "../store/products";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { restoreCart } from "../utils/storeCart";
import { cartActions } from "../store/cart";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token);
  const isAuth = localStorage.getItem("token");

  useEffect(() => {
    const getAllProducts = async () => {
      dispatch(
        ProductsActions.changeStatus({
          err: false,
          pending: true,
          success: false,
        })
      );
      try {
        const data = await getProducts();

        if (!data) {
          dispatch(
            ProductsActions.changeStatus({
              err: true,
              pending: false,
              success: false,
            })
          );
          return;
        }

        dispatch(ProductsActions.replaceCartInfo(data));

        dispatch(
          ProductsActions.changeStatus({
            err: false,
            pending: false,
            success: true,
          })
        );
      } catch (error) {
        console.log({ error });
        dispatch(
          ProductsActions.changeStatus({
            err: true,
            pending: false,
            success: false,
          })
        );
      }
    };
    // check if the user logged in
    if (!isAuth && !token) return;

    getAllProducts();
  }, [isAuth, dispatch, token]);

  useEffect(() => {
    dispatch(cartActions.replaceCartBasket(restoreCart()));
  }, []);

  return <Routes />;
}

export default App;
