export function GlobalReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SUBMIT_SUCCESS":
      return { ...state, ...payload };
    default:
      throw new Error();
  }
}
