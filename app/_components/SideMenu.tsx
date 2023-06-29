"use client";
import { useState, useEffect } from "react";
import { ModalsProps } from "../_types/types";
import CloseIcon from "./icons/CloseIcon";

function SideMenu({ children, openBtnProp }: ModalsProps) {
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
      <button onClick={handleShow} aria-label="open navigation menu">
        {openBtnProp}
      </button>
      {showModal && (
        <>
          <div
            className="lg:hidden flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
            role="dialog"
            aria-modal={true}
          >
            <div
              id="overlay"
              className="bg-black bg-opacity-75 w-screen h-screen "
            >
               
              <div className=" bg-white  absolute inset-y-0 left-0 w-80 p-10">
              <button onClick={handleHide} className="pb-8">
                <CloseIcon
                  fillColor={
                    "fill-current text-DarkGrayishBlue"
                  }
                />
                </button>
                {children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SideMenu;
