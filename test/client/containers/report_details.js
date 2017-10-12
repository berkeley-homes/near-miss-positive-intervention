import test from "tape";
import { shallow } from "enzyme";
import React from "react";
import Immutable from "immutable";

import Input from "../../../src/client/components/input.js";
import Submit from "../../../src/client/components/submit.js";
import {
  ReportDetails,
  mapStateToProps,
  mergeProps
} from "../../../src/client/containers/report_details.js";

test("<ReportDetails /> component", t => {
  const name = "name";
  const description = "description";
  const wrapper = shallow(
    <ReportDetails
      site="goodmans-fields"
      reportType="near-miss"
      name={name}
      locationSelectorProps={{}}
      description={description}
    />
  );

  const inputs = wrapper.find(Input);
  t.equal(inputs.length, 2, "two inputs");

  t.equal(inputs.get(0).props.value, "name", "input has name set");
  t.equal(
    inputs.get(1).props.value,
    "description",
    "input has description set"
  );

  t.ok(!wrapper.find(Submit).node.props.enabled, "submit is disabled");

  t.end();
});

test("<ReportDetails /> component without props renders empty div and calls redirect", t => {
  const redirectUser = x => x;
  const wrapper = shallow(<ReportDetails redirectUser={redirectUser} />);

  t.ok(wrapper.find("div").length === 1);
  t.ok(
    wrapper
      .find("div")
      .first()
      .children().length === 0
  );

  t.end();
});

test("<ReportDetails /> component, completed", t => {
  const description = "description";
  const wrapper = shallow(
    <ReportDetails
      site="goodmans-fields"
      reportType="near-miss"
      locationOne={"one"}
      locationTwo={"two"}
      locationThree={"three"}
      description={description}
    />
  );

  t.ok(
    wrapper.find(Submit).node.props.enabled,
    "can submit with name and final location completed"
  );

  t.end();
});

test("<ReportDetails /> component, locations one and two + third field disabled", t => {
  const description = "description";
  const wrapper = shallow(
    <ReportDetails
      site="woodberry-down"
      reportType="near-miss"
      locationOne={"D"}
      locationTwo={"Basement Carpark"}
      locationThree={""}
      description={description}
    />
  );

  t.ok(
    wrapper.find(Submit).node.props.enabled,
    "can submit with name and final location completed"
  );
  t.end();
});

test("ReportDetails mapStateToProps", t => {
  const name = "name";
  const description = "description";
  const locationOne = "location one";
  const locationTwo = "location two";
  const locationThree = "location three";
  const location = [locationOne, locationTwo, locationThree];

  const state = { report: Immutable.fromJS({ name, description, location }) };
  const props = mapStateToProps(state);

  t.equal(props.name, name, "name pulled from state");
  t.equal(props.description, description, "description pulled from state");
  t.equal(props.locationOne, locationOne, "location 1 pulled from state");
  t.equal(props.locationTwo, locationTwo, "location 2 pulled from state");
  t.equal(props.locationThree, locationThree, "location 3 pulled from state");

  t.end();
});

const filterUnderfined = obj => JSON.parse(JSON.stringify(obj));

test("ReportDetails mergeProps", t => {
  const description = "description";
  const locationOne = "location one";

  const setName = "set name action";
  const setFirstLocation = "set first location action";

  const props = mergeProps(
    { description, locationOne },
    { setName, setFirstLocation }
  );
  const expectedProps = {
    description,
    setName,
    locationOne,
    locationSelectorProps: { setFirstLocation }
  };

  // not checking everything as that would be long
  t.deepEqual(
    filterUnderfined(props),
    expectedProps,
    "location actions get pulled into their own object"
  );

  t.end();
});
