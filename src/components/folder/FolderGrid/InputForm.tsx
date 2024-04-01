"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";

const InputForm = () => {
  const [filterValue, setFilterValue] = useState("");

  return (
    <form className="flex items-center gap-4 w-[30%] mb-10">
      <Input
        placeholder="Filter By Folder Name..."
        value={filterValue}
        //   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //     setFilterValue(event.target.value);
        //   }}
      />
      <Button>search</Button>
    </form>
  );
};

export default InputForm;
