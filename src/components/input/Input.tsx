import { UseFormRegisterReturn, FieldErrors } from "react-hook-form";
interface Props {
  register: UseFormRegisterReturn<any>;
  errors: FieldErrors<any>;
}

export function Input({ register, errors }: Props) {
  const name = register.name;

  const hasError = errors && errors[name] ? true : false;

  return (
    <div>
      <label htmlFor="phone" className="block text-sm mb-1">
        شماره موبایل
      </label>
      <input
        id="phone"
        type="tel"
        placeholder="مثلاً 09123456789"
        className={`w-full border p-2 rounded focus:outline-none ${
          hasError ? "border-red-500" : "border-gray-300 focus:border-blue-500"
        }`}
        {...register}
      />
      {hasError && (
        <p className="text-red-500 text-sm mt-1">
          {(errors && errors[name]?.message?.toString()) ||
            "خطا در مقدار وارد شده"}
        </p>
      )}
    </div>
  );
}
