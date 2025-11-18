"use client";

import BaseImage from "@/components/ui/BaseImage";
import Button from "@/components/ui/Button";
import { removeProduct } from "@/lib/action/actions";
import { useModal } from "@/store/modal";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function DeleteProduct({ productId, productTitle }) {
  const [deleteMessage, setDeleteMessage] = useState(null);
  const { toggleModal, setData } = useModal();

  const { refresh } = useRouter();
  const setModalData = () => {
    setData({
      title: `آیا میخواهید محصول ${productTitle} را حذف کنید ؟`,
      body: (
        <>
          <div className="flex-center-beetwen">
            <Button
              onClick={async () => {
                const message = await removeProduct(productId);
                setDeleteMessage(message);
                toggleModal();
              }}
              className="!bg-danger-900 px-2.5 py-[5px] cursor-pointer"
            >
              حذف
            </Button>
            <Button
              onClick={() => toggleModal()}
              className="!bg-succes px-2.5 py-[5px] cursor-pointer"
            >
              لغو
            </Button>
          </div>
        </>
      ),
    });
  };

  useEffect(() => {
    if (deleteMessage?.succesMessage) {
      toast.success(deleteMessage.succesMessage);
      refresh();
    } else if (deleteMessage?.errorMessage) {
      toast.error(deleteMessage.errorMessage);
      refresh();
    }
  }, [deleteMessage]);

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        toggleModal();
        setModalData();
      }}
      className="!bg-danger-300 px-2.5 py-[5px] cursor-pointer rounded-lg"
    >
      <BaseImage
        src={"/assets/icons/red-trash.svg"}
        heigth="18"
        alt={"trash icon"}
      />
    </div>
  );
}
