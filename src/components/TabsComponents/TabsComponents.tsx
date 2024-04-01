import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Squares2X2Icon, TableCellsIcon } from "@heroicons/react/24/solid";

const TabsComponents = ({ grid , table}: any) => {
  return (
    <Tabs defaultValue="grid" className="">
      <TabsList>
        <TabsTrigger value="grid" className="flex gap-2 items-center">
          <Squares2X2Icon className="w-7 h-7 " /> Grid
        </TabsTrigger>
        <TabsTrigger value="table" className="flex gap-2 items-center">
          <TableCellsIcon className="w-7 h-7 " /> Table
        </TabsTrigger>
      </TabsList>
      <TabsContent value="grid" className="w-full">
        {grid}
      </TabsContent>
      <TabsContent value="table">{table}</TabsContent>
    </Tabs>
  );
};

export default TabsComponents;
