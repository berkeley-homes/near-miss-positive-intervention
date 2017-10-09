import test from "tape";
import Immutable from "immutable";

import { submitReport } from "../../../src/client/actions/submit_report.js";
import { SET_POSTING, SET_POST_RESULT } from "../../../src/client/action_types";
import createMockDispatch from "./mock_thunk";
import { createPromiseSpy } from "../../helpers/spy.js";

test("submitReport success", t => {
  const status = 200;
  const s3PutUrl = "some-url-to-s3";
  const photoKey = "photo key";
  const mockResponse = JSON.stringify({
    s3PutUrl,
    photoKey
  });
  const { calls: requests, spy } = createPromiseSpy({ response: mockResponse });

  const photoExt = "jpg";
  const imageType = "image/jpg";
  const photo = { name: `photo_name.${photoExt}`, type: imageType };
  const description = "description";
  const name = "name";
  const locationFirst = "loactionFirst";
  const locationSecond = "loactionSecond";
  const locationThird = "loactionThird";
  const location = Immutable.List([
    locationFirst,
    locationSecond,
    locationThird
  ]);
  const site = "site";
  const reportType = "near-miss";

  const mockState = {
    report: Immutable.Map({
      photo,
      description,
      name,
      location,
      site,
      reportType
    })
  };

  const { dispatch, calls } = createMockDispatch(mockState, spy);

  dispatch(submitReport())
    .then(() => {
      t.equal(requests.length, 3, "three requests made");
      t.equal(requests[0].length, 1, "request call has one argument");

      let requestOpts = requests.shift()[0];
      t.deepEqual(
        requestOpts,
        {
          method: "put",
          url: "/s3-put-url",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ photoExt })
        },
        "request to for s3 put url"
      );
      requestOpts = requests.shift()[0];
      t.deepEqual(
        requestOpts,
        {
          body: { name: "photo_name.jpg", type: imageType },
          headers: { "Content-Type": imageType, "x-amz-acl": "public-read" },
          method: "put",
          url: s3PutUrl
        },
        "request to s3 to save image"
      );
      requestOpts = requests.shift()[0];
      t.deepEqual(
        JSON.parse(requestOpts.body),
        {
          photoKey,
          description,
          name,
          locationFirst,
          locationSecond,
          locationThird,
          reportType
        },
        "Submit report request"
      );
      t.deepEqual(
        calls.shift(),
        { type: SET_POSTING },
        "first dispatch SET_POSTING"
      );
      t.deepEqual(
        calls.shift(),
        { type: SET_POST_RESULT, status },
        "then we set the result"
      );
      t.deepEqual(
        calls.shift().payload,
        { args: [`/success/${site}/${reportType}`], method: "push" },
        "then we change the url"
      );
      t.equal(calls.length, 0, "only 3 actions dispached");

      t.end();
    })
    .catch(e => {
      t.error(e, "no test error");
      t.end();
    });
});

test("submitReport failure", t => {
  const error = "I am an error";
  const { spy } = createPromiseSpy({ error });

  const mockState = { report: Immutable.fromJS({ location: [] }) };
  const { dispatch, calls } = createMockDispatch(mockState, spy);

  dispatch(submitReport()).then(() => {
    t.deepEqual(
      calls[1],
      { type: SET_POST_RESULT, payload: "I am an error", status: 500 },
      "then we set the result"
    );

    t.end();
  });
});
