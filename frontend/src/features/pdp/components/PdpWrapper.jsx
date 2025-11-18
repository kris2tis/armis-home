import BaseImage from "@/components/ui/BaseImage";
import Seprator from "@/components/ui/Seprator";
import Image from "next/image";
import ReadMore from "@/components/ui/ReadMore";
import AddProduct from "@/components/ui/AddToCart";
import BreadcrumbWrapper from "@/components/ui/BreadcrumbWrapper";

export default function PDPWrapper({ product }) {
  const { title, _id: id, tags, price, imageLink } = product;

  return (
    <div>
      {/* BredCrumb */}
      <BreadcrumbWrapper productTitle={title} />
      {/* Product Pic */}
      <div className="flex flex-col lg:flex-row lg:gap-x-4 gap-y-5 mt-3">
        <div className="w-full grid grid-cols-1  lg:grid-cols-4 lg:gap-x-3 items-center gap-y-5 lg:w-2/5">
          <BaseImage
            src={imageLink}
            alt={`product picture`}
            className="col-span-1 mx-auto lg:col-span-3 lg:order-1 min-h-[290px] max-w-[370px] 2xl:max-w-[500px]  max-h-[370px] 2xl:max-h-[500px] w-full h-full aspect-square rounded-3xl bg-secondary-400"
          />
          {/* OTHER PRODUCT PICTURE */}
          {/* <div className="col-span-1 mx-auto  lg:col-span-1 order-0 grid grid-cols-4 lg:gap-y-2  lg:grid-cols-1 w-full  gap-x-4 ">
            <div className="col-span-1 max-h-[100px] 2xl:max-h-[150px]  aspect-square rounded-3xl bg-secondary-800"></div>
            <div className="col-span-1 max-h-[100px] 2xl:max-h-[150px] aspect-square rounded-3xl bg-secondary-800"></div>
            <div className="col-span-1 max-h-[100px] 2xl:max-h-[150px] aspect-square rounded-3xl bg-secondary-800"></div>
            <div className="col-span-1 max-h-[100px] 2xl:max-h-[150px] aspect-square rounded-3xl bg-secondary-800"></div>
          </div> */}
        </div>
        <Seprator className={"bg-primary-800 lg:hidden"} type={"hr"} />

        {/* Details */}
        <div className="flex flex-col gap-y-3 lg:w-3/5">
          {/* Title */}
          <div>
            <h4 className="text-secondary-900">{title}</h4>
          </div>
          {/* Property */}
          <div className="grid grid-cols-2 gap-y-5">
            {/* Tags and Id */}
            <div className="flex flex-col gap-y-2  col-span-1">
              <div className="text-secondary-800 body-sm flex gap-x-2">
                برچسب:
                {tags.map((t, index) => (
                  <span key={index} className="text-primary-900">
                    {t}
                  </span>
                ))}
              </div>
              <div className="text-secondary-800 body-sm flex gap-x-2">
                شناسه کالا:
                <span className="text-primary-900">{id.slice(0, 10)}...</span>
              </div>
            </div>
            {/* Comment And qualiry */}
            <div className="flex flex-col items-end gap-y-2  col-span-1">
              <div className="text-secondary-900 body-sm flex gap-x-2">
                0 دیدگاه
                <BaseImage
                  src={"/assets/icons/message-text.svg"}
                  alt={"message-text icon"}
                  className="!h-[20px]"
                />
              </div>
              <div className="text-secondary-900 body-sm flex gap-x-2">
                ضمانت اصالیت کیفیت کالا
                <BaseImage
                  src={"/assets/icons/shield-tick.svg"}
                  alt={"shield-tick icon"}
                  className="!h-[20px]"
                />
              </div>
            </div>

            {/* Add to Cart */}
          </div>

          {/* Add to cart Button */}
          <AddProduct data={{ id, price }} />
        </div>
      </div>
      {/* Product Description */}
      <div className="flex flex-col gap-y-3 items-center w-full mt-10">
        <div className="relative flex flex-col">
          <h4 className={` font-light lg:font-bold lg:text-[24px]`}>
            توضیحات محصول
          </h4>
          <Image
            src={"/assets/icons/khat.svg"}
            width={110}
            height={10}
            alt="khat image"
          />
        </div>
        <h5 className="text-justify font-light">
          <ReadMore
            className={"lg:hidden"}
            text={
              "تشک راحت و مناسب قطعا در راحتی خواب ما بی تاثیر نیست. پس باید قبل از خرید تشک، مطمئن باشیم که چه نوع تشکی برای ما مناسب است. فاکتورهایی که باید هنگام خرید تشک به آن توجه کرد راحتی، مدل و اندازه تخت‌خواب شماست. گفتنی است که راحتی تشک از زیبایی و طرح آن بسیار مهم‌تر است. پس تشکی را انتخاب کنید که در مرحله اول راحتی و خواب راحت شما را تضمین می‌کند. تشک طبی فنری رویال مدل W120 سایز"
            }
          />
          <span className="hidden lg:block text-center">
            تشک راحت و مناسب قطعا در راحتی خواب ما بی تاثیر نیست. پس باید قبل از
            خرید تشک، مطمئن باشیم که چه نوع تشکی برای ما مناسب است. فاکتورهایی
            که باید هنگام خرید تشک به آن توجه کرد راحتی، مدل و اندازه تخت‌خواب
            شماست. گفتنی است که راحتی تشک از زیبایی و طرح آن بسیار مهم‌تر است.
            پس تشکی را انتخاب کنید که در مرحله اول راحتی و خواب راحت شما را
            تضمین می‌کند. تشک طبی فنری رویال مدل W120 سایز 120 در 200 سانتی متر
            یک نفره یکی از ایده‌آل‌ترین محصولات شرکت رویال است که با بهره‌گیری
            از دانش روز دنیا ساخته شده است. ساختار این تشک با رعایت تمام
            استانداردهای پزشکی و ارتوپدی بین‌المللی طراحی شده است. این تشک با
            ایجاد حس بی‌وزنی و دفه بهرویه این محصول از جنس ژاکارد است. همان‌طور
            که از{" "}
          </span>
        </h5>
      </div>
      {/* Relation Products */}
      {/* <RelationProduct /> */}
    </div>
  );
}
