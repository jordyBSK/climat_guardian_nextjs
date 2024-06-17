"use client";
import React, { useState } from "react";
import Plan from "@/app/ui/plan/Plan";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [newEspData, setNewEspData] = useState({ name: "", ip: "" });

  const [espList, setEspList] = useState([
    { cx: 78, cy: 80, ip: "182.250.231.111", name: "Chasseron" },
    { cx: 16, cy: 59, ip: "182.250.231.112", name: "Argentine" },
    { cx: 82, cy: 42, ip: "182.250.231.113", name: "Jungfrau" },
    { cx: 51, cy: 42, ip: "182.250.231.114", name: "Pleiades" },
  ]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setNewEspData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddEsp = (newEsp: {
    cx: number;
    cy: number;
    ip: string;
    name: string;
  }) => {
    setEspList((prevList) => [...prevList, newEsp]);
  };

  const handleFormSubmit = () => {
    const newCircle = {
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      ip: newEspData.ip,
      name: newEspData.name,
    };
    handleAddEsp(newCircle);
    setNewEspData({
      name: "",
      ip: "",
    });
  };

  return (
    <div>
      <div>
        <Popover>
          <PopoverTrigger>
            <Button className="text border-2 border-black bg-white text-black hover:text-white">
              Nouvelle position
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-44 flex-col gap-4 font-bold">
            <Input
              type="text"
              name="name"
              placeholder="Nom"
              value={newEspData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="ip"
              placeholder="Adresse IP"
              value={newEspData.ip}
              onChange={handleChange}
              required
            />
            <Button
              className="mt-2 w-full bg-black text-white"
              onClick={handleFormSubmit}
            >
              Valider
            </Button>
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Plan espList={espList} />
      </div>
    </div>
  );
}
