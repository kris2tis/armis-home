import BaseImage from "@/components/ui/BaseImage";
import { Datepicker } from "@ijavad805/react-datepicker";

export default function DataPicker({ name, onChange, errors }) {
  const hasErrors = errors && errors[name];

  return (
    <div
      className={`flex-center-beetwen border-b py-2 ${
        hasErrors ? "border-danger-900" : "border-secondary-500"
      }`}
    >
      <Datepicker
        input={
          <input
            className="cursor-pointer"
            placeholder="یک تاریخ انتخاب کنید"
          />
        }
        theme="blue"
        onChange={(val) => onChange(val.format())}
      />
      <div className="py-[5px] px-2.5 bg-secondary-300 rounded-lg">
        <BaseImage
          src={"/assets/icons/calender.svg"}
          alt={"calender icon"}
          heigth="20"
        />
      </div>
    </div>
  );
}
