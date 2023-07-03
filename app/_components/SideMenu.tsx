"use client";
import { ModalsProps } from "../_types/types";
import CloseIcon from "./icons/CloseIcon";
import useModal from "../_hooks/useModal";

function SideMenu({ children, triggerElement }: ModalsProps) {
  const { showModal, handleShow, handleHide } = useModal();

  return (
    <>
      <button
        onClick={handleShow}
        aria-label="open navigation menu"
        className="focus:outline-none"
      >
        {triggerElement}
      </button>
      {showModal && (
        <>
          <div
            id="modal"
            className="lg:hidden flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            role="dialog"
            aria-modal={true}
          >
            <div
              id="overlay"
              className="bg-black bg-opacity-75 w-screen h-screen "
            >
              <div className=" bg-white  absolute inset-y-0 left-0 w-64 p-10">
                <button onClick={handleHide} className="pb-8">
                  <CloseIcon fillColor={"fill-current text-DarkGrayishBlue"} />
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

export default SideMenu;
