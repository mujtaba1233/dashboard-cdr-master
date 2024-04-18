import axios from "axios";
import { URL } from "../utility/url";
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 6,
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
export async function Outbound911EmergencyCalls(body) {
  return await axios.post(URL +"/outbound-911-emergency-calls", body, config);
}
export async function Emergency911CallsByDuration(body) {
  return await axios.post(URL +"/emergency-911-calls-by-duration", body, config);
}
export async function Emergency911CallsByDuration1(body) {
  return await axios.post(URL +"/emergency-911-calls-by-duration1", body, config);
}
export async function Emergency911CallsBySIPTrunk(body) {
  return await axios.post(URL +"/emergency-911-calls-by-sip-trunk", body, config);
}
// export async function Emergency911CallsByDuration(body) {
//   return await axios.post("/emergency-911-calls-by-duration", body, config);
// }
export async function Emergency911CallsBySourceCode(body) {
  return await axios.post(URL +"/emergency-911-calls-by-source-code", body, config);
}
export async function Emergency911CallsByDestinationCode(body) {
  return await axios.post(URL +"/emergency-911-calls-by-destination-code", body, config);
}
