import { useEffect, useState } from "react";

function useModal() {
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

  return {
    showModal,
    handleShow,
    handleHide,
  };
}

export default useModal;
