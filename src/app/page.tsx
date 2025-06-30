"use client";
// import styles from "./page.module.css";

import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth");
  }, [router]);

  return (
    <div className="w-full h-[100vh] border-2 flex justify-center items-center text-4xl">
      loading please wait ...
    </div>
  );
}
