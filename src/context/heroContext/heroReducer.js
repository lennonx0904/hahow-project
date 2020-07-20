export function HeroReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_HERO_PROFILE":
      return { ...state, ...payload };
    default:
      throw new Error();
  }
}