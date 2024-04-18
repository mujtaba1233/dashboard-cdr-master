import axios from "axios";
import { URL } from "../utility/url";
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 8,
  loaded: 0
}
const config = {
  headers: {
    Authorization: `Bearer ${
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).token
    }`,
  },
  onDownloadProgress: (progressEvent) => {
    const progress = 50 + (progressEvent.loaded / progressEvent.total) * 50;
    if(progress === 100){
        totalProgress.loaded = totalProgress.loaded + 1
        store.dispatch(addProgress(totalProgress))
        if(totalProgress.loaded === totalProgress.total) {
          totalProgress.loaded = 0
        }
    }
  },
};
export async function ExternalIncomingCallsCount(body) {
  return await axios.post(URL + "/external-incoming-calls-count", body, config);
}
export async function ExternalIncomingCallsCountByDuration1(body) {
  return await axios.post(
    URL + "/external-incoming-calls-count-by-duration",
    body,
    config
  );
}
export async function ExternalIncomingCallsCountBySIPTrunk(body) {
  return await axios.post(
    URL + "/external-incoming-calls-count-by-sIP-trunk",
    body,
    config
  );
}
export async function ExternalIncomingCallsCountByDuration(body) {
  return await axios.post(
    URL + "/external-incoming-calls-count-by-duration",
    body,
    config
  );
}
export async function Top20ExternalIncommingCallingNumbers(body) {
  return await axios.post(
    URL + "/top-20-external-incomming-calling-numbers",
    body,
    config
  );
}
export async function Top20ExternalIncommingCalledNumbers(body) {
  return await axios.post(
    URL + "/top-20-external-incomming-called-numbers",
    body,
    config
  );
}
export async function ExternalIncommingCallingNumbersBySourceTimeInterval(
  body
) {
  return await axios.post(
    URL + "/external-incomming-calling-numbers-by-source-time-interval",
    body,
    config
  );
}
export async function ExternalIncommingCallsBySIPTrunk(body) {
  return await axios.post(
    URL + "/external-incomming-calls-by-sIP-trunk",
    body,
    config
  );
}
