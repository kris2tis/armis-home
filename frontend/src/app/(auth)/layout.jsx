import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex-center-center min-h-screen padding">
      <div className="w-full lg:max-w-[500px] lg:h-full lg:py-8 lg:px-4 lg:border lg:border-[#F3F3F3] lg:rounded-2xl">{children}</div>
    </div>
  );
}
