"use client";
import { useAuth } from "@/lib/providers/AuthProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LuHome, LuLoader, LuLogIn, LuLogOut, LuSearch, LuUser } from "react-icons/lu";

export default function Nav() {
  const { user, handleSignOut, loading } = useAuth();

  const pathname = usePathname();
  const links = [
    { icon: LuHome, text: "Home", link: "/" },
    { icon: LuSearch, text: "Explore", link: "/explore" },
    { icon: LuUser, text: "Profile", link: "/profile" },
    ...( loading ? 
      [{icon: LuLoader, text: '...'}] : 
      user
      ? [{ icon: LuLogOut, text: "LogOut", onClick: handleSignOut }]
      : [{ icon: LuLogIn, text: "LogIn", link: "/login" }]),
  ];

  function isActive(link: string) {
    return link === "/" ? pathname === link : pathname.startsWith(link);
  }

  const commonClassName =
    "flex w-max flex-col items-center gap-2 rounded-3xl text-xs md:flex-row md:py-3 md:pl-4 md:pr-8 md:text-xl md:hover:bg-gray-100";

  return (
    <nav className="flex justify-around py-2 md:flex-col md:gap-2 md:py-0">
      {links.map((item) => (
        <React.Fragment key={item.text}>
          {item.link ? (
            <Link
            href={item.link}
            key={item.text}
            className={`${commonClassName} ${
              isActive(item.link) ? "font-bold" : "font-medium"
            }`}
          >
            <item.icon className="mb-1 h-5 w-6 md:mb-0 md:mr-4 md:h-7 md:w-7" />
            <span>{item.text}</span>
          </Link>
          ) : (
            <button onClick={item.onClick} className={commonClassName}>
              <item.icon className="mb-1 h-5 w-6 md:mb-0 md:mr-4 md:h-7 md:w-7" />
              <span>{item.text}</span>
            </button>
          ) }    
        </React.Fragment>
      ))}
    </nav>
  );
}
