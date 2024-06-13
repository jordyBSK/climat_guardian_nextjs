
import NavLinksElement from "@/app/ui/dashboard/NavLinksElement";

export default function SideBarElement() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <p className="ml-2 mb-6">
                Climat Guardian
            </p>
            <div>

            </div>
            <NavLinksElement/>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="hidden h-auto w-full grow rounded-md md:block"></div>
                <form>
                    <button
                        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-gray-100 hover:text-primary md:flex-none md:justify-start md:p-2 md:px-3">
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    );
}
