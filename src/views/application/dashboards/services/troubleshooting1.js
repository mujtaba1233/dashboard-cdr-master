import axios from "axios";
import { URL } from "../utility/url";
// import store from '../store'
// import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 5,
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
        // store.dispatch(addProgress(totalProgress))
        if(totalProgress.loaded === totalProgress.total) {
          totalProgress.loaded = 0
        }
    }
  },
}
export async function advancedcallSearch1(body) {
  return await axios.post(URL +"/advancedcallSearch1", body, config);
}

export async function searchByCalledNumber(body) {
  return await axios.post(URL +"/searchByCalledNumber", body, config);
}

export async function searchByCallingNumber(body) {
  return await axios.post(URL +"/searchByCallingNumber", body, config);
}

export async function searchBySourceDeviceName(body) {
  return await axios.post(URL +"/searchBySourceDeviceName", body, config);
}

export async function searchByDestinationDeviceName(body) {
  return await axios.post(URL +"/searchByDestinationDeviceName", body, config);
}
