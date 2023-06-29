"use client";
import CloseIcon from "./icons/CloseIcon";
import { ModalsProps } from "../_types/types";
import useModal from "../_hooks/useModal";

function Modal({ children, openBtnProp }: ModalsProps) {
  const { showModal, handleShow, handleHide } = useModal();

  return (
    <>
      <button onClick={handleShow} className="focus:outline-none">
        {openBtnProp}
      </button>
      {showModal && (
        <>
          <div
            id="modal"
            className="flex justify-center content-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            role="dialog"
            aria-modal={true}
          >
            <div
              id="overlay"
              className="bg-black bg-opacity-75 w-screen h-screen "
            >
              <div className=" self-center my-36 rounded-md p-2">
                <button onClick={handleHide} className="float-right p-10">
                  <CloseIcon
                    fillColor={
                      "fill-current text-white hover:text-Orange cursor-pointer"
                    }
                  />
                </button>
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
