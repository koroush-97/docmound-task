"use client";

// hooks
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { toast } from "react-toastify";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("randomUser");
    if (!storedUser) {
      router.replace("/auth");
    } else {
      toast.success("خوش آمدید!");
    }
  }, [router]);

  return <div>dashboard page</div>;
}
