import SideBarElement from "@/app/ui/dashboard/SideBarElement";
import { HeaderElement } from "@/app/ui/dashboard/HeaderElement";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full">
      <HeaderElement />
      <div className="flex h-screen flex-col md:flex-row">
        <div className="w-full flex-none md:w-64">
          <SideBarElement />
        </div>
        <div className="flex justify-center w-full py-5 pl-10 pr-4 lg:pr-6">
          {children}
        </div>
      </div>
    </div>
  );
}
