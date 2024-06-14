import NavLinksElement from "@/app/ui/dashboard/NavLinksElement";
import EspLinksElement from "@/app/ui/dashboard/EspLinksElement";
import { Landmark } from "lucide-react";
import Link from "next/link";

export default function SideBarElement() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 border-r gap-y-2">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Landmark className="h-6 w-6" />
        <span className="">Musée Bolo</span>
      </Link>
      <div className="border-b pt-5">
        <NavLinksElement />
      </div>
      <div>
        <EspLinksElement />
      </div>
    </div>
  );
}
