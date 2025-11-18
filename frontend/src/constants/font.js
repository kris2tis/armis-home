import localFont from "next/font/local";

export const vazirMatn = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Modam-Bold.ttf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/Modam-medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/Modam-regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/Modam-light.ttf",
      weight: "300",
    },
  ],
  variable: "--vazir-font",
  style: "normal",
});
