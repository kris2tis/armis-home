export function Tooltip({ children, isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } shadow-lg absolute top-12 right-0 bg-secondary-300 p-3 rounded-lg w-max z-10`}
    >
      {children}
    </div>
  );
}
