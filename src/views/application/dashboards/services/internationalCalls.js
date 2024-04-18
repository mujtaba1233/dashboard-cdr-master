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
// export async function OutboundCallsForInternationalNumbers(body) {
//   return await axios.post(URL +"/outbound-calls-for-international-numbers", body, config);
// }
export async function IncomingCallsForInternationalNumbers(body) {
  return await axios.post(
    URL + "/incoming-calls-for-international-numbers",
    body,
    config
  );
}
export async function OutgoingCallsForInternationalNumbers(body) {
  return await axios.post(
    URL + "/outgoing-calls-for-international-numbers",
    body,
    config
  );
}
export async function OutgoingCallsFromInternationalNumbersBySIPTrunk(body) {
  return await axios.post(
    URL + "/outgoing-calls-from-international-numbers-by-sIP-trunk",
    body,
    config
  );
}
export async function IncommingCallsFromInternationalNumbersBySIPTrunk(body) {
  return await axios.post(
    URL + "/incomming-calls-from-international-numbers-by-sIP-trunk",
    body,
    config
  );
}

export async function IncommingCallsToInternationalNumbersByDurationMetric(
  body
) {
  return await axios.post(
    URL + "/incomming-calls-to-international-numbers-by-duration-metric",
    body,
    config
  );
}

export async function OutgoingCallsFromInternationalNumbersByDurationMetric(
  body
) {
  return await axios.post(
    URL + "/outgoing-calls-from-international-numbers-by-duration-metric",
    body,
    config
  );
}

export async function Top20CallingExtentiontoInternationalNumbers(body) {
  return await axios.post(
    URL + "/top-20-calling-extentionto-international-numbers",
    body,
    config
  );
}
export async function Top20CalledInternationalNumbers(body) {
  return await axios.post(
    URL + "/top-20-called-international-numbers",
    body,
    config
  );
}
export async function OutgoingInternationalCallingNumbersBySourceTimeInterval(
  body
) {
  return await axios.post(
    URL + "/outgoing-international-calling-numbers-by-source-time-interval",
    body,
    config
  );
}
export async function IncommingInternationalCallingNumbersBySourceTimeInterval(
  body
) {
  return await axios.post(
    URL + "/incomming-international-calling-numbers-by-source-time-interval",
    body,
    config
  );
}
