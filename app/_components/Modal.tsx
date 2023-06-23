"use client";
import { useState, useEffect, ReactNode } from "react";
import CloseIcon from "./icons/CloseIcon";

function Modal({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(!showModal);
  }

  function handleHide() {
    setShowModal(false);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === "Escape") {
        handleHide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  return (
    <>
      <button onClick={handleShow}>open</button>
      {showModal && (
        <>
          <div
            className="flex justify-center content-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            role="dialog"
            aria-modal={true}
          >
            <div
              id="overlay"
              className="bg-black bg-opacity-75 w-screen h-screen "
            >
              <button onClick={handleHide} className="p-10 float-right ">
                <CloseIcon
                  fillColor={
                    "fill-current text-white hover:text-Orange cursor-pointer"
                  }
                />
              </button>
              <div className=" self-center my-36 rounded-md p-2">
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
