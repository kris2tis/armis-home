const variants = {
  primary: "bg-primary-900 text-white ",
  secondary: "bg-primary-700 text-secondary-800",
};
export default function Button({
  variant = "primary",
  children,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <button
      onClick={onClick}
      className={`${className} ${variants[variant]} cursor-pointer h-full  bg-primary-900 rounded-lg `}
      {...rest}
    >
      {children}
    </button>
  );
}
