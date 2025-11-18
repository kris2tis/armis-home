"use client";

import Dialog from "@/components/ui/Dialog";
import { useModal } from "@/store/modal";

export default function ModalProvider() {
  const { isOpen, toggleModal , data} = useModal();
  return <Dialog data={data} isOpen={isOpen} toggleModal={toggleModal} />;
}
