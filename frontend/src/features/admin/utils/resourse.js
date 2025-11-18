export const paymentTableHead = [
  { id: 1, name: "عکس محصول" },
  { id: 2, name: "نام محصول" },
  { id: 3, name: "شماره فاکتور" },
  { id: 4, name: "مبلغ" },
  { id: 5, name: "تاریخ" },
  { id: 6, name: "وضعیت" },
];

export const paymentStatus = {
  COMPLETED: { id: 1, bgc: "#DAFFD5", iconName: "tick" },
};

export const userRols = {
  USER: "کاربر",
  ADMIN: "ادمین",
};

export const userStatus = {
  true: { id: 1, bgc: "#DAFFD5", iconName: "tick" },
  false: { id: 2, bgc: "#FFD5D5", iconName: "red-close" },
};
export const productTableHead = [
  { id: 1, name: "عکس محصول" },
  { id: 2, name: "نام محصول" },
  { id: 3, name: "دسته بندی" },
  { id: 4, name: "مبلغ" },
  { id: 5, name: "تاریخ" },
  { id: 6, name: "حذف محصول" },
];

export const userTableHead = [
  { id: 1, name: "عکس کاربر" },
  { id: 2, name: "نام کاربر" },
  { id: 3, name: "شماره موبایل" },
  { id: 4, name: "نقش" },
  { id: 5, name: "تاریخ ثبت نام" },
  { id: 6, name: "وضغیت کاربر" },
];

export const addType = [
  { title: "محصول", _id: "product" },
  { title: "پست", _id: "post" },
  { title: "نظر", _id: "comment" },
  { title: "بلیط", _id: "ticket" },
];

export const createNavigation = [
  {
    id: 1,
    title: "ساخت محصول",
    href: "create-product",
    iconName: "create-product",
  },
  {
    id: 3,
    title: "ساخت دسته بندی",
    href: "create-category",
    iconName: "create-category",
  },
  {
    id: 3,
    title: "ساخت کد تخفیف",
    href: "create-coupon",
    iconName: "create-coupon",
  },
];

export const listNavigation = [
  {
    id: 1,
    title: "پرداختی ها",
    href: "payments",
    iconName: "payments",
  },
  {
    id: 1,
    title: "محصولات",
    href: "products",
    iconName: "black-product-grid",
  },
  {
    id: 3,
    title: "کاربران",
    href: "users",
    iconName: "users",
  },
];
