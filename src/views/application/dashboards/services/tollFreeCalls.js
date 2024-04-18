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
export async function OutboundCallsForTollFreeNumbers(body) {
  return await axios.post(URL +"/outbound-calls-for-toll-free-numbers", body, config);
}
export async function IncomingCallsForTollFreeNumbers(body) {
  return await axios.post(URL +"/incoming-calls-for-toll-free-numbers", body, config);
}
export async function CallsFromTollFreeNumbersBySIPTrunk(body) {
  return await axios.post(URL +"/calls-from-toll-free-numbers-by-sIP-trunk", body, config);
}
export async function CallsToTollFreeNumbersBySIPTrunk(body) {
  return await axios.post(URL +"/calls-to-toll-free-numbers-by-sIP-trunk", body, config);
}
export async function CallsToTollFreeNumbersByDuration(body) {
  return await axios.post(URL +"/calls-to-toll-free-numbers-by-duration", body, config);
}
export async function CallsFromTollFreeNumbersByDuration(body) {
  return await axios.post(URL +"/calls-from-toll-free-numbers-by-duration", body, config);
}
export async function Top20CallingNumbersToTollFreeNumbers(body) {
  return await axios.post(URL +"/top-20-calling-numbers-to-toll-free-numbers", body, config);
}
export async function Top20CalledTollFreeNumbers(body) {
  return await axios.post(URL +"/top-20-called-toll-free-numbers", body, config);
}
