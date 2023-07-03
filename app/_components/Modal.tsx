"use client";
import CloseIcon from "./icons/CloseIcon";
import { ModalsProps } from "../_types/types";
import useModal from "../_hooks/useModal";

function Modal({ children, triggerElement }: ModalsProps) {
  const { showModal, handleShow, handleHide } = useModal();

  return (
    <>
      <button onClick={handleShow} className="focus:outline-none">
        {triggerElement}
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
              <div className=" flex flex-col m-20">
                <button
                  onClick={handleHide}
                  className="self-center p-2 ml-[30rem]"
                >
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
