"use client";
import { useState, useEffect, ReactNode } from "react";

interface ModalsProps {
    children: ReactNode;
    openBtnProp: ReactNode;
}

function CartModal({children, openBtnProp} : ModalsProps) {
  const [showModal, setShowModal] = useState(false);

  function handleShow() {
    setShowModal(!showModal);
  }

  function handleHide() {
    setShowModal(false);
  }

  

  useEffect(() => {
    const handleKeyDown = (e:KeyboardEvent) => {
        e.preventDefault()
        console.log('ArrowRight','ArrowLeft');
        
        if (e.key === "Escape" ) {
            handleHide()
        }
      }

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
   
},[showModal])



  

  return (
   <>
    <button onClick={handleShow}>{openBtnProp}</button>
    {showModal &&  <>
       
        <div className="flex justify-end  overflow-x-hidden overflow-y-auto fixed  z-50  outline-none focus:outline-none shadow-xl rounded-xl " role="dialog" aria-modal={true}>
         <div className="">
            <div className=" bg-white ">
                {children}
                </div>
                </div>
          </div>
     
        
        </>}
  
        </>
  );
}

export default CartModal;
