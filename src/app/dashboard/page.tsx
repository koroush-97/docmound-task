"use client";

import styles from "./dashboard.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("randomUser");
    if (!storedUser) {
      router.replace("/auth");
    }
  }, [router]);

  const user =
    typeof window !== "undefined" && localStorage.getItem("randomUser");
  const parsedUser = user ? JSON.parse(user) : null;

  console.log(parsedUser);

  return (
    <div className={`${styles.dashboardContainer}  flex flex-row`}>
      <div className="content w-3/4 h-full hidden  md:flex flex-col">
        <div className="border-2 h-1/3 flex justify-center items-center">
          <h1 className="text-4xl direction-rtl">
            {" "}
            خوش آمدید <span>{parsedUser.name.first}</span> به پنل کاربری
          </h1>
        </div>
        <div className="border-2 h-2/3 flex justify-center items-center">
          داشبورد
        </div>
      </div>
      <div className="sidebar w-full md:w-1/4 h-full">
        <div className=" md:hidden flex p-2 justify-center items-center border-2">
          <h2>
            خوش آمدید <span>{parsedUser.name.first}</span> به پنل کاربری
          </h2>
        </div>
        <div className={`${styles.imgSidebar}`}>
          <img src={parsedUser.picture.medium} alt="avatar" />
        </div>

        <ul className={`${styles.parentList}`}>
          <li> نام : {parsedUser.name.first} </li>
          <li>نام خانوادگی: {parsedUser.name.last} </li>
        </ul>
      </div>
    </div>
  );
}
