import { Card, CardTitle } from "@/components/ui/card";
import React from "react";

const FileTable = () => {
  return (
    <Card className="p-5 bg-slate-50 dark:bg-slate-900 pb-10">
      <CardTitle className="capitalize font-bold text-2xl">
        recent files
      </CardTitle>
    </Card>
  );
};

export default FileTable;
