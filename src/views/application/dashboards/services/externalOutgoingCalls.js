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
    Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).token}`,
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
}
export async function ExternalOutgoingCallsCount(body) {
  return await axios.post(URL +"/external-outgoing-calls-count", body, config);
}
export async function ExternalOutgoingCallsCountByDuration1(body) {
  return await axios.post(URL +"/external-outgoing-calls-count-by-duration1", body, config);
}
export async function ExternalOutgoingCallsCountBySIPTrunk(body) {
  return await axios.post(URL + "/external-outgoing-calls-count-by-sIP-trunk", body, config);
}
export async function ExternalOutgoingCallsCountByDuration(body) {
  return await axios.post(URL + "/external-outgoing-calls-count-by-duration", body, config);
}
export async function Top20ExternalOutgoingCallingNumbers(body) {
  return await axios.post(URL + "/top-20-external-outgoing-calling-numbers", body, config);
}
export async function Top20ExternalOutgoingCalledNumbers(body) {
  return await axios.post(URL + "/top-20-external-outgoing-called-numbers", body, config);
}
export async function ExternalOutgoingCallingNumbersBySourceTimeInterval(body) {
  return await axios.post(URL + 
    "/external-outgoing-calling-numbers-by-source-time-interval",
    body, config
  );
}
export async function ExternalOutgoingCallsBySIPTrunk(body) {
  return await axios.post(URL + "/external-outgoing-calls-by-sIP-trunk", body, config);
}
