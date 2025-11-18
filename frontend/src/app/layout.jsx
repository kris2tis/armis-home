import { vazirMatn } from "@/constants/font";
import "./globals.css";
import { Toaster } from "sonner";
import ReactQueryProvider from "@/provider/ReactQueryProvider";
import AuthProvider from "@/context/useAuth";
import ModalProvider from "@/provider/ModalProvider";

export const metadata = {
  title: {
    template: "%s | آرمیس هوم",
    default: "آرمیس هوم | خرید اینترنتی کالا خواب", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" href="/assets/brand/simple-logo.svg" sizes="" />
      </head>
      <body className={`${vazirMatn.variable} h-full`}>
        <ReactQueryProvider>
          <AuthProvider>{children}</AuthProvider>
          <Toaster style={{ font: "inherit" }} position="top-center" />
          <ModalProvider />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
