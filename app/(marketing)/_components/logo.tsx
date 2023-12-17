import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src={"./logo.svg"} height={40} width={40} alt="Logo" />
      <p className="font-semibold">Notion</p>
    </div>
  );
};

export default Logo;
