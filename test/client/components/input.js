import test from "tape";
import React from "react";
import { shallow } from "enzyme";
import NameInput from "../../../src/client/components/input.js";

test("Name input component includes input", t => {
  let valueSet;
  let value = "value";
  let label = "label";
  let onChange = () => {
    valueSet = newValue;
  };
  const wrapper = shallow(
    <NameInput value={value} label={label} onChange={onChange} />
  );

  t.ok(wrapper.find("label").length === 1, "has label");

  const newValue = "new value";
  wrapper.find("input").simulate("change", { target: { value: newValue } });
  t.equal(valueSet, newValue, "change event triggers onChange");

  t.end();
});
