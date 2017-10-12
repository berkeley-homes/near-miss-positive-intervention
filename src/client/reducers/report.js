import Immutable from "immutable";
import {
  SET_PHOTO,
  SET_POSTING,
  SET_NAME,
  SET_LOCATION,
  SET_DESCRIPTION,
  SET_POST_RESULT,
  SET_REPORT_TYPE,
  SET_SITE,
  RESET_SITE
} from "../action_types.js";

export const initialState = Immutable.fromJS({
  location: [],
  isPosting: false,
  name: "",
  description: "",
  title: "Near Miss - Positive Interventions",
  site: ""
});

export const resetForm = state => state.delete("photo").merge(initialState);

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTO:
      return state.set("photo", action.photo);
    case SET_NAME:
      return state.set("name", action.name);
    case SET_SITE:
      return state.set("site", action.site);
    case RESET_SITE:
      return state
        .set("site", action.site)
        .set("location", Immutable.fromJS([]));
    case SET_DESCRIPTION:
      return state.set("description", action.description);
    case SET_REPORT_TYPE:
      return state.set("reportType", action.reportType);
    case SET_POSTING:
      return state.set("isPosting", true);
    case SET_POST_RESULT:
      return resetForm(
        state
          .set("payload", action.payload)
          .set("statusCode", action.statusCode)
      );
    case SET_LOCATION:
      console.log("LOCATION", state.get("location"));
      const index = action.locationIndex;
      return state.update("location", location =>
        location
          .set(index, action.location)
          .map((val, i) => (i > index ? "" : val))
      );
    default:
      return state;
  }
};
