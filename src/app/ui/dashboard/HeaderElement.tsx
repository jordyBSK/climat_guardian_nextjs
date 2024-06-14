import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function HeaderElement() {
  return (
    <div className="flex flex-col h-12">
      <header className="flex justify-between items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
        <div className="flex items-center flex-grow">
          <span className="flex-grow"></span>
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="ml-auto">
                <AvatarImage src="https://avatars.githubusercontent.com/u/125542402?v=4" />
                <AvatarFallback>USER</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-32">
              <div className="">
                <form>
                  <button className="flex h-2 w-full grow items-center justify-center rounded-md p-4 text-sm font-medium hover:bg-gray-100 hover:text-primary">
                    <div className="hidden md:block">Sign Out</div>
                  </button>
                </form>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </header>
    </div>
  );
}
