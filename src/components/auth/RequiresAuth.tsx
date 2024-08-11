import { useAuth } from "@/lib/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface RequiresAuthProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  as?: "button" | "div" | "span";
}

export default function RequiresAuth({
  onClick,
  className,
  children,
  as = "button",
}: RequiresAuthProps) {
  const { user } = useAuth();
  const router = useRouter();
  const Component = as;
  function handleClick(e: React.MouseEvent) {
    if (!user) {
      e.preventDefault();
      e.stopPropagation();
      toast("you must me logged in to do that");
      router.push("/login");
    } else if (onClick) {
      onClick(e);
    }
  }
  return <Component className={className} onClick={handleClick}></Component>;
}
