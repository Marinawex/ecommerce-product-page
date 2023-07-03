"use client";
import useModal from "@/app/_hooks/useModal";
import { ModalsProps } from "@/app/_types/types";

function CartModal({ children, triggerElement }: ModalsProps) {
  const { showModal, handleShow } = useModal();

  return (
    <>
      <button
        onClick={handleShow}
        aria-label="show cart preview"
        className="focus:outline-none"
      >
        {triggerElement}
      </button>
      {showModal && (
        <div
          id="modal"
          className="absolute  -translate-x-1/2 mt-8 flex overflow-y-auto z-50 shadow-xl rounded-xl"
          role="dialog"
          aria-modal={true}
        >
          <div className="bg-white ">{children}</div>
        </div>
      )}
    </>
  );
}

export default CartModal;
