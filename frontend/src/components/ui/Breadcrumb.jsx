import translateBreadcrumb from "@/utils/translateBreadcrumb";

export default function Breadcrumb({ pathname = "" }) {
  const translated = translateBreadcrumb(pathname);

  return (
    <div className="flex h-full items-center gap-x-2">
      {translated.map((tr, index) => {
        const currentRoute = index + 1 === translated.length;
        return (
          <>
            <h5
              className={`${
                currentRoute ? "text-black" : "text-secondary-800"
              } text-secondary-400 font-light`}
            >
              {tr}
            </h5>
            {!currentRoute && (
              <div className="w-[2px] h-[10px] bg-secondary-400"></div>
            )}
          </>
        );
      })}
    </div>
  );
}
