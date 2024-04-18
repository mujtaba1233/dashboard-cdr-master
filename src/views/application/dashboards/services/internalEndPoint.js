import axios from "axios"
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
export async function CallsBetweenInternalDevicesOnly(body) {
  return await axios.post(URL +"/calls-between-internal-devices-only", body, config);
}
export async function CallsFromInternalEndpoint(body) {
  return await axios.post(URL +"/calls-from-internal-endpoint", body, config);
}
export async function CallsFromInternalEndpointToExternalDestination(body) {
  return await axios.post(URL +
    "/calls-from-internal-endpoint-to-external-destination",
    body, config
  );
}
export async function CallsToInternalEndpoints(body) {
  return await axios.post(URL +"/calls-to-internal-endpoints", body, config);
}
export async function ExternalIncomingCallsToInternalEndpoints(body) {
  return await axios.post(URL +
    "/external-incoming-calls-to-internal-endpoints",
    body,config
  );
}
export async function CallsFromInternalEndpointsToVoiceMail(body) {
  return await axios.post(URL +"/calls-from-internal-endpoints-to-voice-mail", body, config);
}
export async function CallsToInternalByDuration(body) {
  return await axios.post(URL +"/calls-to-internal-by-duration", body, config);
}
export async function CallsFromInternalByDuration(body) {
  return await axios.post(URL +"/calls-from-internal-by-duration", body, config);
}
// export async function ExternalIncomingCallsBySIPTrunk(body) {
//   return await axios.post(URL +"/external-incoming-calls-by-sIP-trunk", body, config);
// }
// export async function ExternalOutgoingCallsBySIPTrunk(body) {
//   return await axios.post(URL +"/external-outgoing-calls-by-sIP-trunk", body, config);
// }
// export async function CallsToCUCMNodeID(body) {
//   return await axios.post(URL +"/calls-to-cUCM-node-iD", body, config);
// }
// export async function CallsFromCUCMNodeID(body) {
//   return await axios.post(URL +"/calls-from-cUCM-node-iD", body, config);
// }
