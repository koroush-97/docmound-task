"use client";
// @components
import { Input, Button } from "@/components";

// @utilis
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// @ usequery
import { useQuery } from "@tanstack/react-query";
// featch data
import { fetchRandomUser } from "@/utils/api/apiClient";

// hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type FormsValue = {
  phone: string;
};

export default function Page() {
  useEffect(() => {
    const storedUser = localStorage.getItem("randomUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("User from localStorage:", parsedUser);
    } else {
      console.log("No user data found in localStorage");
    }
  }, []);

  const router = useRouter();

  const { refetch } = useQuery({
    queryKey: ["randomUser"],
    queryFn: fetchRandomUser,
    enabled: false,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormsValue>();

  const onSubmit = async (data: FormsValue) => {
    const result = await refetch();
    if (result.data) {
      const filteredUser = {
        name: {
          first: result.data.name.first,
          last: result.data.name.last,
        },
        picture: {
          medium: result.data.picture.medium,
        },
      };

      localStorage.setItem("randomUser", JSON.stringify(filteredUser));
      console.log("Filtered user saved:", filteredUser);
    }

    router.push("/dashboard");
    toast.success("خوش آمدید!");
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
