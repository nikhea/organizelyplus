import { COLOR_EXTENSION_MAP } from "@/lib/constants/fileType";

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    //   icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    //   icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    //   icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    //   icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    //   icon: CrossCircledIcon,
  },
];

export const FileTypesValue = Object.keys(COLOR_EXTENSION_MAP).map(
  (extension) => ({
    value: extension,
    label: extension.toUpperCase(),
  })
);

// export const FileTypesValue = [
//   {
//     value: "pdf",
//     label: "PDF",
//   },
//   {
//     value: "png",
//     label: "PNG",
//   },
// ];
