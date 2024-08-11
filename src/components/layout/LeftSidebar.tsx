import Link from "next/link";
import { LuSparkle } from "react-icons/lu";
import Nav from "./Nav";
export default function LeftSidebar() {
  return (
    <aside className="xl:w1/5 hidden h-screen w-1/4 overflow-y-auto border-r border-gray-200 p-6 md:sticky md:block">
      <Link className="mb-8 block" href="/">
        <LuSparkle className="h-8 w-8 text-gray-800" />
      </Link>
      <Nav />
    </aside>
  );
}
