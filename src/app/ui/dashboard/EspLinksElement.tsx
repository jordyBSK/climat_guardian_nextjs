"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "recharts";

const links = [
  { name: "chasseron", ip: "192.168.123.132" },
  { name: "pleiades", ip: "192.168.123.132" },
];

export default function EspLinksElement() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const href = `/dashboard/esp/${link.name}`;
        return (
          <Link
            key={link.name}
            href={href}
            className={clsx(
              "flex items-center gap-3 rounded-lg py-2 text-sm text-gray-500 transition-all hover:text-primary",
              {
                "": pathname === href,
              },
            )}
          >
            <p className="hidden text-lg md:block">{link.name}</p>
          </Link>
        );
      })}
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">ajouter un esp</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <form>
            <div className="flex gap-2">
              <Label>name</Label>
              <Input type="text" id="espName" placeholder="name" />

              <Label>ip adress</Label>
              <Input type="text" id="espName" placeholder="ip adresse" />
            </div>
            <Button
              className="mt-2 w-full bg-black text-white"
              type="submit"
              variant="outline"
            >
              ajouter un esp
            </Button>
          </form>
        </PopoverContent>
      </Popover>
    </>
  );
}
