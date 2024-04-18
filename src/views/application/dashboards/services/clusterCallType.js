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
export async function ExternalIncomingCallsFromLongDistanceNumbers(body) {
  return await axios.post(URL+
    "/external-incoming-calls-from-long-distance-numbers",
    body,config
  );
}
export async function ExternalOutgoingCallsFromLongDistanceNumbers(body) {
  return await axios.post(URL+
    "/external-outgoing-calls-from-long-distance-numbers",
    body,config
  );
}
export async function ExternalOutgoingCallsFromTollFreeNumbers(body) {
  return await axios.post(URL+
    "/external-outgoing-calls-from-toll-free-numbers",
    body,config
  );
}
export async function ExternalOutgoingCallsToTollFreeNumbers(body) {
  return await axios.post(URL+
    "/external-outgoing-calls-to-toll-free-numbers",
    body,config
  );
}
export async function ExternalOutgoingCallsFromInternationalSources(body) {
  return await axios.post(URL+
    "/external-outgoing-calls-from-international-sources",
    body,config
  );
}
export async function ExternalOutgoingCallsToTollInternationalSources(body) {
  return await axios.post(URL+
    "/external-outgoing-calls-to-toll-international-sources",
    body,config
  );
}
