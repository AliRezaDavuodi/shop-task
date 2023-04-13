import reactDom from "react-dom";
import FlagIcon from "../../assets/icons/Flag";
import CallIcon from "../../assets/icons/Call";
import OffIcon from "../../assets/icons/Off";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ModalActions } from "../../store/modal";
import { useEffect } from "react";
import { RootState } from "../../store/store";

const Backdrop = () => {
  const dispatch = useDispatch();

  const showModal = useSelector((state: RootState) => state.modal.show);

  const hideModalHandler = () => dispatch(ModalActions.hideModal());

  useEffect(() => {
    if (showModal) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  }, [showModal]);

  return (
    <div
      onClick={hideModalHandler}
      className={`fixed top-0 left-0 w-full h-full overflow-hidden animate-showUp z-20 bg-black/70 ${
        showModal ? "opacity-100" : "opacity-0 -z-20"
      }`}
    />
  );
};

const Overlay = () => {
  const dispatch = useDispatch();

  const hideModalHandler = () => dispatch(ModalActions.hideModal());

  const showModal = useSelector((state: RootState) => state.modal.show);
  return (
    <div
      className={`absolute flex flex-col justify-center w-full duration-300 bg-white rounded-t-2xl min-h-56  ${
        showModal ? "animate-up z-30 bottom-0" : "-bottom-full -z-30"
      }`}
    >
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
        onClick={hideModalHandler}
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
