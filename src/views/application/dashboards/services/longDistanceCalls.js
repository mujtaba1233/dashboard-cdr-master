import axios from "axios";
import { URL } from "../utility/url";
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 10,
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
export async function OutboundCallsForLongDistanceNumbers(body) {
  return await axios.post(URL +"/outbound-calls-for-long-distance-numbers", body, config);
}
export async function IncomingCallsForLongDistanceNumbers(body) {
  return await axios.post(URL +"/incoming-calls-for-long-distance-numbers", body, config);
}
export async function IncomingCallsFromLongDistanceNumbersBySIPTrunk(body) {
  return await axios.post(URL +
    "/incoming-calls-from-long-distance-numbers-by-sIP-trunk",
    body, config
  );
}
export async function OutboundCallsFromLongDistanceNumbersBySIPTrunk(body) {
  return await axios.post(URL +
    "/outbound-calls-from-long-distance-numbers-by-sIP-trunk",
    body, config
  );
}
export async function OutboundCallsToLongDistanceNumbersBySIPTrunk(body) {
  return await axios.post(URL +
    "/outbound-calls-to-long-distance-numbers-by-sIP-trunk",
    body, config
  );
}
export async function IncommingCallsFromLongDistanceNumbersBySIPTrunk(body) {
  return await axios.post(URL +
    "/incomming-calls-from-long-distance-numbers-by-sIP-trunk",
    body, config
  );
}
export async function Top20CallingExtentiontoLongDistanceNumbers(body) {
  return await axios.post(URL +
    "/top-20-calling-extentionto-long-distance-numbers",
    body, config
  );
}
export async function Top20CalledLongDistanceNumbers(body) {
  return await axios.post(URL +"/top-20-called-long-distance-numbers", body, config);
}
export async function OutboundCallsToLongDistanceNumbersByDuration(body) {
  return await axios.post(URL +
    "/outbound-calls-to-long-distance-numbers-by-duration",
    body, config
  );
}
export async function IncommingCallsFromLongDistanceNumbersByDuration(body) {
  return await axios.post(URL +
    "/incomming-calls-from-long-distance-numbers-by-duration",
    body, config
  );
}
