import React from "react";
import cx from "classnames";

import Dropdown from "./dropdown.js";

const keys = map => map && map.keySeq().toList();

export const Label = ({ text, enabled, field }) => (
  <div
    className={cx("fl", "w-third", "h2", "ph3", "relative", {
      "black-30": !enabled,
      "black-60": enabled
    })}
  >
    <label className="absolute w-third bottom-0 pointer" htmlFor={field}>
      {text}
    </label>
  </div>
);

export default props => {
  const {
    optionsTree,
    locationOne,
    setFirstLocation,
    locationTwo,
    setSecondLocation,
    locationThree,
    setThirdLocation
  } = props;

  const otherSelected = locationOne === "Other";

  const secondEnabled = !otherSelected && locationOne;
  const thirdEnabled = !otherSelected && locationOne && locationTwo;

  return (
    <div>
      <div className="fl w-100 h2 relative">
        <Label text={"Location Block"} field="locationOne" enabled />
        <Label text={"Core"} field="locationTwo" enabled={secondEnabled} />
        <Label text={"Level"} field="locationThree" enabled={thirdEnabled} />
      </div>
      <Dropdown
        value={locationOne}
        field="locationOne"
        enabled
        options={keys(optionsTree)}
        select={setFirstLocation}
        label="Location Block"
      />
      <Dropdown
        value={locationTwo}
        field="locationTwo"
        enabled={secondEnabled}
        options={keys(optionsTree.get(locationOne))}
        select={setSecondLocation}
        label="Core"
      />
      <Dropdown
        value={locationThree}
        field="locationThree"
        enabled={thirdEnabled}
        options={keys(optionsTree.getIn([locationOne, locationTwo]))}
        select={setThirdLocation}
        label="Level"
      />
    </div>
  );
};
