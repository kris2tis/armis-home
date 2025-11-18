"use client";

import BaseImage from "@/components/ui/BaseImage";
import Drawer from "@/components/ui/Drawer";
import Search from "@/components/ui/Search";
import { useAuth } from "@/context/useAuth";
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import { useState } from "react";
import { headerActions, headerNavigation } from "../../utils/resourse";

export default function Header() {
  const { isAuthenticated } = useAuth();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const drawerRef = useOutsideClick(setIsOpenDrawer);
  return (
    <div className="w-full grid grid-cols-3 lg:grid-cols-5 items-center gap-y-6 lg:gap-y-0 pt-4">
      {/* Rigth (LOGO) */}
      <div className="col-span-1 lg:hidden">
        <div
          onClick={() => setIsOpenDrawer((prev) => !prev)}
          className="bg-primary-900 rounded-lg p-2 w-max"
        >
          <BaseImage
            src={"/assets/icons/menu.svg"}
            alt={"search icon"}
            heigth={24}
          />
        </div>
      </div>
      <div className=" col-span-1 flex justify-center lg:justify-start">
        <Link href={"/"}>
          <BaseImage
            src={"/assets/brand/logo.svg"}
            className="w-[122px] aspect-auto"
            alt={"logo"}
            heigth={45}
          />
        </Link>
      </div>
      {/* Center */}
      <Navigation
        className={"hidden lg:flex lg:items-center lg:justify-center"}
      />
      {/* Left */}
      <div className="col-span-1 flex items-center justify-end lg:gap-x-3.5">
        <Link href={"/cart"}>
          <div className="bg-primary-900 rounded-lg p-2 lg:hidden  ">
            <BaseImage
              imageClassName={"!stroke-amber-300"}
              src={"/assets/icons/bag-white.svg"}
              alt={"search icon"}
              heigth={24}
            />
          </div>
        </Link>
        <BaseImage
          className="hidden lg:block"
          src={"/assets/icons/search-normal.svg"}
          alt={"search icon"}
          heigth={24}
        />

        {headerActions.map((hAction) => {
          const authIndex = headerActions.length === 2;
       
          const href = authIndex
            ? isAuthenticated
              ? "/profile"
              : "/signin"
            : null;
            
          return (
            <Link key={hAction.id} href={href}>
              <BaseImage
                className="hidden lg:block"
                src={hAction.iconSrc}
                alt={hAction.alt}
                heigth={24}
              />
            </Link>
          );
        })}
      </div>
      <div className="col-span-5 lg:hidden">
        <Search />
      </div>

      <Drawer
        isOpen={isOpenDrawer}
        ref={drawerRef}
        children={<Navigation className={"flex flex-col gap-y-3 p-3 lg"} />}
      />
    </div>
  );
}

function Navigation({ className }) {
  return (
    <div className={`${className} col-span-3   gap-x-9`}>
      {headerNavigation.map((nav) => (
        <Link key={nav.id} href={nav.href}>
          <span className="text-secondary-800" key={nav.id}>
            {nav.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
