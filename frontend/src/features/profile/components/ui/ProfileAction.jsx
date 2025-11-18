"use client";

import BaseImage from "@/components/ui/BaseImage";
import Button from "@/components/ui/Button";
import useLogout from "@/hooks/useLogout";
import { useModal } from "@/store/modal";
import { useEffect } from "react";

export default function LogoutProfile() {
  const { toggleModal, setData } = useModal();

  const lotoutHandler = useLogout();
  useEffect(() => {
    setData({
      title: "آیا میخواهید از حساب خارج شوید ؟",
      body: (
        <>
          <span className="text-justify">
            با خروج از حساب کاربری، به سبد خرید فعلی‌تان دسترسی نخواهید داشت.
            هروقت بخواهید می‌توانید مجددا وارد شوید و خریدتان را ادامه دهید.
          </span>

          <div className="flex-center-between [&_button]:font-medium gap-x-2 [&>*]:w-1/2 border-t border-secondary-500 py-3">
            <Button
              onClick={() => {
                lotoutHandler();
                toggleModal();
              }}
              className="!bg-primary-900 "
            >
              خروج از حساب
            </Button>
            <Button
              onClick={() => toggleModal()}
              className="bg-transparent border  border-primary-900 !text-secondary-900"
            >
              انصراف
            </Button>
          </div>
        </>
      ),
    });
  }, []);
  return (
    <>
      <div
        onClick={() => toggleModal()}
        className="flex justify-between py-2 cursor-pointer"
      >
        <div className="flex items-center gap-x-2">
          <BaseImage
            src={"/assets/icons/exit.svg"}
            heigth={20}
            alt={"exit from acount icon"}
          />
          <span className="body-sm">خروج از حساب</span>
        </div>
        <BaseImage
          className="lg:hidden"
          src={"/assets/icons/arrow-left.svg"}
          heigth={20}
          alt={"arrow left icon"}
        />
      </div>
    </>
  );
}
