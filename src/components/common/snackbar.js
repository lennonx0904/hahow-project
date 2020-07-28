import { useSnackbar } from "notistack";

export default function useCustomSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  function enqueueSuccessSnackbar(message) {
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 2000
    });
  }

  function enqueueWarningSnackbar(message) {
    enqueueSnackbar(message, {
      variant: "warning",
      autoHideDuration: 3000
    });
  }
  return { enqueueSuccessSnackbar, enqueueWarningSnackbar };
}
