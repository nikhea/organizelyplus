import * as React from "react";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Column } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileIcon, defaultStyles } from "react-file-icon";
import { COLOR_EXTENSION_MAP } from "@/lib/constants/fileType";
import { Table } from "@tanstack/react-table";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  table: Table<TData>;

  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  table,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set(column?.getFilterValue() as string[]);
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-12 rounded-lg mx-2  border-dashed"
          >
            <PlusIcon className="mr-2 h-4 w-4" />
            {title}
            {selectedValues?.size > 0 && (
              <>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Badge
                  variant="secondary"
                  className="rounded-sm px-1 font-normal lg:hidden cursor-pointer"
                >
                  {selectedValues.size}
                </Badge>
                <div className="hidden space-x-1 lg:flex">
                  {selectedValues.size > 2 ? (
                    <Badge
                      variant="secondary"
                      className="rounded-sm px-1 cursor-pointer font-normal"
                    >
                      {selectedValues.size} selected
                    </Badge>
                  ) : (
                    options
                      .filter((option) => selectedValues.has(option.value))
                      .map((option) => (
                        <Badge
                          variant="secondary"
                          key={option.value}
                          className="rounded-sm px-1 font-normal cursor-pointer"
                        >
                          {option.label}
                        </Badge>
                      ))
                  )}
                </div>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 cursor-pointer" align="start">
          <Command>
            <CommandInput placeholder={title} />
            <CommandList>
              {/* <CommandEmpty>No results found.</CommandEmpty> */}
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selectedValues.has(option.value);
                  return (
                    <div
                      className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-muted-foreground"
                      key={option.value}
                      onClick={() => {
                        console.log("Selected value: " + option.value);
                        if (isSelected) {
                          selectedValues.delete(option.value);
                        } else {
                          selectedValues.add(option.value);
                        }
                        const filterValues = Array.from(selectedValues);
                        column?.setFilterValue(
                          filterValues.length ? filterValues : undefined
                        );
                      }}
                      // onSelect={() => {
                      //   if (isSelected) {
                      //     selectedValues.delete(option.value);
                      //   } else {
                      //     selectedValues.add(option.value);
                      //   }
                      //   const filterValues = Array.from(selectedValues);
                      //   column?.setFilterValue(
                      //     filterValues.length ? filterValues : undefined
                      //   );
                      // }}
                    >
                      <div
                        className={cn(
                          "mr-2 cursor-pointer flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                          isSelected
                            ? "bg-primary cursor-pointer text-primary-foreground"
                            : "opacity-50  cursor-pointer [&_svg]:invisible"
                        )}
                      >
                        <CheckIcon className={cn("h-4 w-4")} />
                      </div>
                      <div className="mr-2 h-5 w-5 text-muted-foreground cursor-pointer">
                        <FileIcon
                          labelColor={COLOR_EXTENSION_MAP[option.value]}
                          extension={option.value}
                          // @ts-ignore
                          {...defaultStyles[option.value]}
                        />
                      </div>

                      <span>{option.label}</span>
                      {facets?.get(option.value) && (
                        <span className="ml-auto flex h-4 w-4 items-center justify-center cursor-pointer font-mono text-xs">
                          {facets.get(option.value)}
                        </span>
                      )}
                    </div>
                  );
                })}
              </CommandGroup>
              {selectedValues.size > 0 && (
                <>
                  <CommandSeparator />
                  <CommandGroup>
                    <CommandItem
                      onSelect={() => column?.setFilterValue(undefined)}
                      className="justify-center text-center"
                    >
                      Clear filters
                    </CommandItem>
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {isFiltered && (
        <Button
          variant="ghost"
          onClick={() => table.resetColumnFilters()}
          className="h-8 px-2 lg:px-3"
        >
          Reset
          <PlusIcon className="ml-2 h-4 w-4" />
        </Button>
      )}
    </>
  );
}
{
  /* <CommandItem
key={option.value}
onSelect={() => {
  if (isSelected) {
    selectedValues.delete(option.value);
  } else {
    selectedValues.add(option.value);
  }
  const filterValues = Array.from(selectedValues);
  column?.setFilterValue(
    filterValues.length ? filterValues : undefined
  );
}}
>
<div
  className={cn(
    "mr-2 cursor-pointer flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
    isSelected
      ? "bg-primary cursor-pointer text-primary-foreground"
      : "opacity-50  cursor-pointer [&_svg]:invisible"
  )}
>
  <CheckIcon className={cn("h-4 w-4")} />
</div>
<div className="mr-2 h-5 w-5 text-muted-foreground cursor-pointer">
  <FileIcon
    labelColor={COLOR_EXTENSION_MAP[option.value]}
    extension={option.value}
    // @ts-ignore
    {...defaultStyles[option.value]}
  />
</div>

<span>{option.label}</span>
{facets?.get(option.value) && (
  <span className="ml-auto flex h-4 w-4 items-center justify-center cursor-pointer font-mono text-xs">
    {facets.get(option.value)}
  </span>
)}
</CommandItem> */
}
