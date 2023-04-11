import { PATH } from "../constants/Paths";
import HomePage from "../pages/Home/HomePage";

export const Routes = [
  {
    path: PATH.HOME,
    exact: true,
    private: false,
    component: HomePage,
    index: true,
  },
];
