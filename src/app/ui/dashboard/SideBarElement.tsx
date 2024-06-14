import NavLinksElement from "@/app/ui/dashboard/NavLinksElement";
import EspLinksElement from "@/app/ui/dashboard/EspLinksElement";

export default function SideBarElement() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 border-r">
      <p className="ml-2 mb-6">Climat Guardian</p>
      <div className="border-b">
        <NavLinksElement />
      </div>
      <div>
        <EspLinksElement />
      </div>
    </div>
  );
}
