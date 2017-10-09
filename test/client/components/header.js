import test from "tape";
import React from "react";
import { shallow } from "enzyme";
import Header from "../../../src/client/components/header.js";

test("Header includes NM Logo, title and menubtn", t => {
  const wrapper = shallow(<Header />);
  t.ok(wrapper.find("div").length === 3, "header contains 3 child elements");
  t.end();
});
