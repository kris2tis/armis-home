export default function RHFSelect({
  label,
  name,
  options,
  register,
  errors,
  selectedOption,
}) {
  const hasError = errors && errors[name];
  const errorMessage = hasError && errors[name]?.message;

  return (
    <div className="flex flex-col gap-y-2 border-b py-2 border-secondary-500">
      <label htmlFor={name}>
        <span className="text-secondary-400 body-sm lg:text-[14px]">
          {label}
        </span>
      </label>
      <select
        className={`p-2 ${hasError && "border border-danger-900"}`}
        {...register(name)}
        name={name}
      >
        {options?.length &&
          options?.map((option) => {
            const selecteedId = selectedOption?._id === option?._id;
            return (
              <option
                defaultValue={`${selecteedId && option.title}`}
                key={option._id}
                value={option._id}
              >
                {option.title}
              </option>
            );
          })}
      </select>
      {hasError && <span className="text-red-400">{errorMessage}</span>}
    </div>
  );
}
