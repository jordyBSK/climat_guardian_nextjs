import SideBarElement from "@/app/ui/dashboard/SideBarElement";
import { HeaderElement } from "@/app/ui/dashboard/HeaderElement";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderElement />
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideBarElement />
          </div>
          <div className="flex-grow py-16 px-6">
            {children}¨</div>
        </div>
      </div>
    </div>
  );
}
