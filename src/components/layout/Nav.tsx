"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHome, LuLogIn, LuSearch, LuUser } from "react-icons/lu";

export default function Nav() {
  const pathname = usePathname();
  const links = [
    { icon: LuHome, text: "Home", link: "/" },
    { icon: LuSearch, text: "Explore", link: "/explore" },
    { icon: LuUser, text: "Profile", link: "/profile" },
    { icon: LuLogIn, text: "LogIn", link: "/login" },
  ];

  function isActive(link: string) {
    return link === "/" ? pathname === link : pathname.startsWith(link);
  }

  return (
    <nav className="flex justify-around py-2 md:flex-col md:gap-2 md:py-0">
      {links.map((item) => (
        <Link
          href={item.link}
          key={item.text}
          className={`flex w-max flex-col items-center gap-2 rounded-3xl text-xs md:flex-row md:py-3 md:pl-4 md:pr-8 md:text-xl md:hover:bg-gray-100 ${
            isActive(item.link) ? "font-bold" : "font-medium"
          }`}
        >
          <item.icon className="mb-1 h-5 w-6 md:mb-0 md:mr-4 md:h-7 md:w-7" />
          <span>{item.text}</span>
        </Link>
      ))}
    </nav>
  );
}
