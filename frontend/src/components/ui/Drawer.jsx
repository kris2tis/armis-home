export default function Drawer({
  isOpen = false,
  children,
  ref,
  className = "",
}) {
  return (
    <>
      <div
        ref={ref}
        className={`
          ${className}
          ${
            isOpen ? "translate-0 " : "translate-x-full"
          } transition-transform duration-300 right-0 bg-white z-30 w-1/2 min-h-screen absolute top-0 `}
      >
        {children}
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 w-full right-1/2 translate-x-1/2 z-20 bg-secondary-900/50 min-h-screen`}
      ></div>
    </>
  );
}
