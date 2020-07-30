export const initialHeroState = { profile: {}, currentHeroId: 0 };

export function HeroReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE_HERO_PROFILE":
      return { ...initialHeroState, ...{ profile: payload } };
      case "UPDATE_CURRENT_HERO_ID":
        return { ...initialHeroState, ...{ currentHeroId: payload } };
    default:
      throw new Error();
  }
}
