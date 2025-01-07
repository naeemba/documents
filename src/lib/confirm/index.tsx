import {
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { createConfirmation, confirmable, ConfirmDialog } from "react-confirm";

export interface Props {
  title?: string;
}

const Confirmation: ConfirmDialog<Props, boolean> = ({
  show,
  proceed,
  title,
}) => (
  <AlertDialog
    onOpenChange={(open) => {
      if (!open) proceed(false);
    }}
    open={show}
  >
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel onClick={() => proceed(false)}>
          Cancel
        </AlertDialogCancel>
        <AlertDialogAction onClick={() => proceed(true)}>
          Continue
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

const ConfirmableDialog = confirmable(Confirmation);
export const confirm = createConfirmation(ConfirmableDialog);
