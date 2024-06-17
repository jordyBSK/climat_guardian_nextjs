import Plan from "@/app/ui/plan/Plan";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div>
      <div>
        <Popover>
          <PopoverTrigger>
            <Button className="text border-2 border-black bg-white text-black hover:text-white">
              new position
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-44 gap-2 font-bold">
            <Input type="text" placeholder="name" />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Plan />
      </div>
    </div>
  );
}
