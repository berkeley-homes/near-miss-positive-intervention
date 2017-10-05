import test from "tape";
import React from "react";
import { shallow } from "enzyme";
import ThumbsDown from "../../../src/client/components/thumbs_down.js";

test("<ThumbsDown />", t => {
  t.plan(2);
  const wrapper = shallow(<ThumbsDown />);
  t.ok(wrapper.find("p").length === 1);
  t.ok(wrapper.find("img").length === 1);
  t.end();
});
