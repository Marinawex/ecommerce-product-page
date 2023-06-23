"use client";
import { useState, useEffect, ReactNode } from "react";

interface ModalsProps {
  children: ReactNode;
  openBtnProp: ReactNode;
}

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
      <button onClick={handleShow}>{openBtnProp}</button>
      {showModal && (
        <>
          <div
            className="flex  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            role="dialog"
            aria-modal={true}
          >
            <div
              id="overlay"
              className="bg-black bg-opacity-75 w-screen h-screen "
            >
              <div className=" bg-white ">{children}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SideMenu;
