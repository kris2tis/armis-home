export default function RHFTextArea({ lable, register, name, errors }) {
  const hasErrors = errors && errors[name];
  return (
    <div className="flex flex-col gap-y-2.5">
      <label className="text-[10px] lg:text-[14px]" htmlFor={name}>
        {lable}
      </label>
      <textarea
        className={`bg-secondary-550 border focus:outline-transparent outline-0 border-transparent ${
          hasErrors && "!border-danger-900"
        } rounded-md min-h-[60px] px-1.5 py-2 text-[10px] lg:text-[14px]`}
        name={name}
        id={name}
        defaultValue={"توضیحات..."}
        {...register(name)}
      ></textarea>
      {hasErrors && (
        <span className="text-danger-900 body-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
}
