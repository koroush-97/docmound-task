"use client";
// @components
import { Input, Button } from "@/components";

// @utilis and hooks
import { useForm } from "react-hook-form";

type FormsValue = {
  phone: string;
};

export default function page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormsValue>();

  const onSubmit = (data: FormsValue) => {
    console.log(data);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-80 space-y-4"
      >
        <h1 className="text-xl font-semibold text-center">ورود</h1>
        <Input
          register={register("phone", {
            required: "شماره موبایل الزامیست",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل معتبر نیست",
            },
          })}
          errors={errors}
        />
        <Button />
      </form>
    </div>
  );
}
