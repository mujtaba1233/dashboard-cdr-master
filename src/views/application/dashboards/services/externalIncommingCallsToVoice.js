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
export async function ExternalIncommingCallsToVoiceMailCount(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-count",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailPublisher(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-publisher",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailSubscriber(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-subscriber",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMaiByServerName(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mai-by-server-name",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMaiBySIPTrunk(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mai-by-sIP-trunk",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailByDuration(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-by-duration",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailBySourceCodec(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-by-source-codec",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailByDestinationCodec(
  body
) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-by-destination-codec",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailByOriginNodeId(body) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-by-origin-node-id",
    body,
    config
  );
}
export async function ExternalIncommingCallsToVoiceMailByDestinationNodeId(
  body
) {
  return await axios.post(
    URL + "/external-incomming-calls-to-voice-mail-by-destination-node-id",
    body,
    config
  );
}
