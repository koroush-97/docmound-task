"use client";
// import styles from "./page.module.css";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth");
  }, [router]);

  return <div>loading please whait...</div>;
}
