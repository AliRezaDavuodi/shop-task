import axios from "axios";
import authHeader from "./auth-header";
import { getProductsType, productsType } from "../@types/service/products";

const API_URL = "https://dummyjson.com/";

export const getProducts: () => Promise<getProductsType> = async () => {
  return axios
    .get(API_URL + "products", { headers: authHeader() })
    .then((res) => res.data);
};

export const getSingleProduct: (id: string) => Promise<productsType> = async (
  id
) => {
  return axios
    .get(API_URL + "products/" + id, { headers: authHeader() })
    .then((res) => res.data);
};
