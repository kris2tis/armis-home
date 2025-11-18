"use client";

import Breadcrumb from "@/components/ui/Breadcrumb";
import { usePathname } from "next/navigation";

export default function BreadcrumbWrapper({ productTitle }) {
  let pathName = usePathname().split("/");
  pathName.splice(2, 1, productTitle);
  pathName.splice(0, 1, "/");
  return <Breadcrumb pathname={pathName} />;
}
