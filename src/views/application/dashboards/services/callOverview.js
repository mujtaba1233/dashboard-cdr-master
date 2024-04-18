import axios from 'axios';
import { URL } from '../utility/url';
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 12,
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
 export async function TotalCallsAttempted (body) { 
 return await axios.post( URL +  '/total-calls-attempted', body, config); 
 }
 export async function TotalCallsCompleted (body) { 
 return await axios.post( URL + '/total-calls-completed', body, config); 
 }
 export async function ExternalCallsOngoing (body) { 
 return await axios.post( URL + '/external-calls-ongoing', body, config); 
 }
 export async function ExternalIncomingCalls (body) { 
 return await axios.post( URL + '/external-incoming-calls', body, config); 
 }
 export async function ExternalOutgoingCalls (body) { 
 return await axios.post( URL + '/external-outgoing-calls', body, config); 
 }
 export async function InternalCallsOnly (body) { 
 return await axios.post( URL + '/internal-calls-only', body, config); 
 }
 export async function OutgoingEmergencyCalls (body) { 
 return await axios.post( URL + '/outgoing-emergency-calls', body, config); 
 }
 export async function CallsByDuration (body) { 
 return await axios.post(URL + '/calls-by-duration', body, config); 
 }
 export async function ExternalIncomingCallsBySIPTrunk (body) { 
 return await axios.post( URL + '/external-incoming-calls-by-sIP-trunk', body, config); 
 }
 export async function ExternalOutgoingCallsBySIPTrunk (body) { 
 return await axios.post( URL + '/external-outgoing-calls-by-sIP-trunk', body, config); 
 }
 export async function CallsToCUCMNodeID (body) { 
 return await axios.post( URL + '/calls-to-cUCM-node-iD', body, config); 
 }
 export async function CallsFromCUCMNodeID (body) { 
 return await axios.post( URL + '/calls-from-cUCM-node-iD', body, config); 
 }