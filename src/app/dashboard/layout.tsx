import SideBarElement from "@/app/ui/dashboard/SideBarElement";
import { HeaderElement } from "@/app/ui/dashboard/HeaderElement";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full">
      <HeaderElement />
      <div className="flex h-screen flex-col md:flex-row">
        <div className="hidden md:block w-full flex-none md:w-64">
          <SideBarElement />
        </div>
        <div className="flex w-full mx-4 md:-mx-5 md:mt-2 lg:mx-10">
          {children}
        </div>
      </div>
    </div>
  );
}
