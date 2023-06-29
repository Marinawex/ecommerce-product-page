import { useEffect, useState, useCallback } from "react";
import { ModalHook } from "../_types/types";

function useModal(): ModalHook {
  const [showModal, setShowModal] = useState<boolean>(false);

  const getFocusableChildren = (node: HTMLElement): HTMLElement[] => {
    return [];
  };

  const trapTabKey = useCallback((node: HTMLElement, event: KeyboardEvent) => {
    const focusableChildren = getFocusableChildren(node);
    const focusedItemIndex = focusableChildren.indexOf(
      document.activeElement as HTMLElement
    );
    const lastIndex = focusableChildren.length - 1;
    const withShift = event.shiftKey;

    if (withShift && focusedItemIndex === 0) {
      focusableChildren[lastIndex].focus();
      event.preventDefault();
    } else if (!withShift && focusedItemIndex === lastIndex) {
      focusableChildren[0].focus();
      event.preventDefault();
    }
  }, []);

  const handleShow = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  const handleHide = useCallback(() => {
    setShowModal(false);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === "Escape") {
        handleHide();
      } else if (e.key === "Tab" && showModal) {
        const modal = document.getElementById("modal") as HTMLElement;
        trapTabKey(modal, e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showModal, handleHide, trapTabKey]);

  return {
    showModal,
    handleShow,
    handleHide,
  };
}

export default useModal;
