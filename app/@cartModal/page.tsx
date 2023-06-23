"use client";
import { useRouter } from "next/navigation";
import Modal from "../_components/Modal";
import LightBox from "../_components/LightBox";


export default async function cartModal() {
  const router = useRouter();
  return (
    <>
      {/* <span onClick={() => router.back()}>Close modal</span>
      <Modal>
        {<LightBox />}
        </Modal> */}
    </>
  );
}
