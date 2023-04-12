import reactDom from "react-dom";
import FlagIcon from "../../assets/icons/Flag";
import CallIcon from "../../assets/icons/Call";
import OffIcon from "../../assets/icons/Off";
import { Link } from "react-router-dom";

const Backdrop = () => {
  return (
    <div className="fixed top-0 left-0 z-20 w-full h-screen overflow-hidden bg-black/70" />
  );
};

const Overlay = () => {
  return (
    <div className="absolute bottom-0 z-30 flex flex-col justify-center w-full duration-300 bg-white rounded-t-2xl min-h-56 animate-up">
      <Link
        to={""}
        className="flex items-center gap-4 px-8 py-1.5 font-semibold capitalize border-b border-b-grayish"
      >
        <div className="">
          <FlagIcon />
        </div>
        <div className="">about us</div>
      </Link>

      <Link
        to={""}
        className="flex items-center gap-4 px-8 py-1.5 font-semibold capitalize border-b border-b-grayish"
      >
        <div className="">
          <CallIcon />
        </div>
        <div className="">contact us</div>
      </Link>

      <Link
        to={"/login"}
        className="flex items-center gap-4 px-8 py-1.5 font-semibold capitalize"
      >
        <div className="">
          <OffIcon />
        </div>
        <div className="">log out</div>
      </Link>

      <div className="absolute w-24 h-1 -translate-x-1/2 rounded-full bg-darkerGray top-2 left-1/2" />
    </div>
  );
};

const ModalBox = document.getElementById("modal") as HTMLElement;

const Modal = () => {
  return (
    <>
      {reactDom.createPortal(<Backdrop />, ModalBox)}
      {reactDom.createPortal(<Overlay />, ModalBox)}
    </>
  );
};

export default Modal;
