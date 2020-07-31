import { useSnackbar } from "notistack";

export default function useCustomSnackbar() {
  const { enqueueSnackbar } = useSnackbar();

  function enqueueSuccessSnackbar(message) {
    enqueueSnackbar(message, {
      variant: "success",
      autoHideDuration: 2000,
    });
  }

  function enqueueErrorSnackbar(message) {
    enqueueSnackbar(message, {
      variant: "error",
      autoHideDuration: 3000,
    });
  }
  return { enqueueSuccessSnackbar, enqueueErrorSnackbar };
}
