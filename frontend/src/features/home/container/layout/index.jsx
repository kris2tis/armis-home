import HeroBanner from "../route/HeroBanner";
import BaseImage from "@/components/ui/BaseImage";
import Header from "./header";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <div className="flex flex-col gap-y-6  min-h-screen padding">
      <HeroBanner>
        <div className="flex items-center gap-x-2">
          <span className="text-white">
            {"تخفیف ها شروع شده همین الان بخرید"}
          </span>
          <BaseImage
            src={"/assets/icons/arrow-long-left.svg"}
            heigth={12}
            alt={"arrow icon"}
          />
        </div>
      </HeroBanner>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
