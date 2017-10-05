import test from "tape";
import React from "react";
import { shallow } from "enzyme";
import Immutable from "immutable";

import Dropdown from "../../../src/client/components/dropdown.js";
import LocationSelector, {
  Label
} from "../../../src/client/components/location_selector.js";

const mockTree = Immutable.fromJS({ a: { b: { c: {} } } });

test("<LocactionSelector /> without location selected", t => {
  const wrapper = shallow(<LocationSelector optionsTree={mockTree} />);

  const dropdowns = wrapper.find(Dropdown);
  t.deepEqual(
    dropdowns.map(dropdown => !!dropdown.node.props.enabled),
    [true, false, false],
    "one dropdown enabled before selection made"
  );

  const dropdown = dropdowns.at(0);
  t.deepEqual(
    dropdown.node.props.options.toJS(),
    ["a"],
    "dropdown has correct options"
  );
  t.end();
});

test("<LocactionSelector /> with locations selected", t => {
  const locationOne = "a";
  const locationTwo = "b";
  const locationThree = "c";
  const wrapper = shallow(
    <LocationSelector
      locationOne={locationOne}
      locationTwo={locationTwo}
      locationThree={locationThree}
      optionsTree={mockTree}
    />
  );

  const dropdowns = wrapper.find(Dropdown);
  t.equal(dropdowns.length, 3, "all dropdowns visible");

  t.end();
});

test("location selector <Label />", t => {
  const text = "text";
  const wrapper = shallow(<Label text={text} />);

  t.ok(wrapper.find("label").length === 1, "has text");

  t.end();
});
