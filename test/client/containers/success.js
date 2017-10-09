import test from "tape";
import React from "react";
import { shallow } from "enzyme";
import { Success } from "../../../src/client/containers/success.js";
import Header from "../../../src/client/components/header.js";
import BerkeleyLogo from "../../../src/client/components/berkeley_logo.js";
import ThanksMessage from "../../../src/client/components/thanks_message.js";
import SuccessIllustration from "../../../src/client/components/success_illustration.js";
import HomeBtn from "../../../src/client/components/home_button.js";

test("<Success />", t => {
  const wrapper = shallow(<Success />);
  t.plan(5);
  t.equal(wrapper.find(Header).length, 1, "has Header");
  t.equal(wrapper.find(BerkeleyLogo).length, 1, "has Berkeley logo");
  t.equal(wrapper.find(ThanksMessage).length, 1, "has thanks message");
  t.equal(
    wrapper.find(SuccessIllustration).length,
    1,
    "has success illustration"
  );
  t.equal(wrapper.find(HomeBtn).length, 1, "has home button");
  t.end();
});

test("<Success /> with error", t => {
  const wrapper = shallow(<Success payload={{ response: 500 }} />);
  t.equal(wrapper.find(ThanksMessage).length, 0, "No thanks message shown");
  t.equal(wrapper.find("p").length, 1, "Shows error message instead");
  t.end();
});
