import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export function RemoveDialog({
  isconfirmOpen,
  setIsConfirmOpen,
  title,
  description,
}: any) {
  const handleClick = () => {
    alert("Are you sure");
    setIsConfirmOpen(false);
  };
  return (
    <AlertDialog open={isconfirmOpen} onOpenChange={setIsConfirmOpen}>
      {/* <AlertDialogTrigger asChild>
        <span>Delete</span>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleClick}>Continue</Button>
          {/* <AlertDialogAction onClick={handleClick}>Continue</AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
