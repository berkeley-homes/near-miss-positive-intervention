import { push } from "react-router-redux";

import { SET_POSTING, SET_POST_RESULT } from "../action_types.js";

export const setPostResult = response => ({
  type: SET_POST_RESULT,
  status: response.status
});

export const setPostResultError = error => ({
  type: SET_POST_RESULT,
  payload: error,
  status: 500
});

const ext = name => {
  const tokens = name.split(".");
  return tokens && tokens.length && tokens[tokens.length - 1];
};

const getS3UrlRequest = (request, photoName) =>
  request({
    method: "put",
    url: "/s3-put-url",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ photoExt: ext(photoName) })
  });

const uploadPhotoRequest = (request, url, photo) =>
  request({
    url,
    method: "put",
    body: photo,
    headers: {
      "Content-Type": photo.type,
      "x-amz-acl": "public-read"
    }
  });

const submitReportRequest = (request, state, photoKey) => {
  const [locationFirst, locationSecond, locationThird] = state
    .get("location")
    .toArray();

  return request({
    url: "/submit",
    headers: { "Content-Type": "application/json" },
    method: "post",
    body: JSON.stringify({
      description: state.get("description"),
      name: state.get("name"),
      reportType: state.get("reportType"),
      photoKey,
      locationFirst,
      locationSecond,
      locationThird
    })
  });
};

const reportAndUploadRequests = (request, url, photoKey, state) =>
  Promise.all([
    uploadPhotoRequest(request, url, state.get("photo")),
    submitReportRequest(request, state, photoKey)
  ]);

export const submitReport = () => (dispatch, getState, request) => {
  const state = getState().report;

  dispatch({ type: SET_POSTING });
  const photo = state.get("photo");

  return (photo
    ? getS3UrlRequest(request, photo.name).then(responseText => {
        const { s3PutUrl, photoKey } = JSON.parse(responseText);
        return reportAndUploadRequests(request, s3PutUrl, photoKey, state);
      })
    : submitReportRequest(request, state, null, dispatch)
  )
    .then(() => dispatch(setPostResult({ status: 200 })))
    .catch(error => {
      dispatch(setPostResultError(error));
      console.error(error);
    })
    .then(() => {
      console.log({
        site: state.get("site"),
        type: state.get("reportType")
      });
      dispatch(
        push(`/success/${state.get("site")}/${state.get("reportType")}`)
      );
    })
    .catch(e => {
      console.error(e);
    });
};
