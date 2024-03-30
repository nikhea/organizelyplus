"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FolderPlusIcon } from "@heroicons/react/24/solid";
import { Card } from "../ui/card";
import { SelectDemo } from "../Select/select";
import { useState } from "react";

export function NewFolder() {
  const [closeDialog, setCloseDialog] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // console.log(data);
    setCloseDialog(false);
  };
  return (
    <Dialog open={closeDialog} onOpenChange={setCloseDialog}>
      <DialogTrigger asChild>
        <div className=" ">
          <button
            type="button"
            className="w-full  flex lg:hidden items-center gap-1 capitalize text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <FolderPlusIcon className="w-5 h-5 mr-1" />
            new folder
          </button>
          <Card className="lg:flex p-3 flex-col w-full hidden h-full items-center justify-center gap-2 cursor-pointer">
            <FolderPlusIcon className="w-10 h-10 text-violet-500 hover:text-violet-700" />
            <h1 className="capitalize font-bold text-lg">create new folder</h1>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>New Folder</DialogTitle>
            <DialogDescription>
              Add new folder to your collections here. Click save when done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid  ">
            <div className=" space-y-2">
              <Label htmlFor="name" className="text-right ">
                Folder Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Folder Name"
                required={true}
                errors={errors}
                inputRef={register("name", { required: true })}
              />
            </div>
            <SelectDemo
              placeholder="Select color"
              options={[
                { value: "red", label: "Red" },
                { value: "blue", label: "Blue" },
                { value: "green", label: "Green" },
                { value: "yellow", label: "Yellow" },
              ]}
              onChange={(selectedValue) => {
                setValue("color", selectedValue);
              }}
            />
          </div>
          <DialogFooter className="mt-4">
            <Button
              className=" flex items-center gap-1 border-0 capitalize text-white bg-violet-500 hover:bg-violet-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Save
            </Button>
            <DialogClose asChild={closeDialog}>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const schema = yup.object().shape({
  name: yup.string().required("Folder Name is required"),
  color: yup.string(),
});
