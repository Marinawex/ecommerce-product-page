"use client";
import useModal from "@/app/_hooks/useModal";
import { ModalsProps } from "@/app/_types/types";

function CartModal({ children, openBtnProp }: ModalsProps) {
  const { showModal, handleShow } = useModal();

  return (
    <>
      <button
        onClick={handleShow}
        aria-label="show cart preview"
        className="focus:outline-none"
      >
        {openBtnProp}
      </button>
      {showModal && (
        <>
          <div
            id="modal"
            className="flex overflow-y-auto fixed  z-50  shadow-xl rounded-xl "
            role="dialog"
            aria-modal={true}
          >
            <div className="">
              <div className=" bg-white ">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CartModal;
