/**
 * Asset icon paths for the app. Use with require() or this map.
 * All icons are in the assets folder.
 */
export const ICONS = {
  hambMenu: require('./hamb_menu_icon.png'),
  user: require('./user_icon.png'),
  home: require('./home_icon.png'),
  workouts: require('./workouts_icon.png'),
  calendar: require('./calendar_icon.png'),
  arrowDropDown: require('./arrow_drop_down.png'),
  wellDone: require('./well_done_icon.png'),
  crossCountrySkiing: require('./cross_country_skiing_icon.png'),
  cycling: require('./cycling_icon.png'),
  swimming: require('./swimming_icon.png'),
};

/** Sport key (from SPORT_OPTIONS) to asset require. */
export function getSportIconSource(sportKey) {
  const map = {
    cross_country_skiing: ICONS.crossCountrySkiing,
    cycling: ICONS.cycling,
    swimming: ICONS.swimming,
  };
  return map[sportKey] || ICONS.crossCountrySkiing;
}
