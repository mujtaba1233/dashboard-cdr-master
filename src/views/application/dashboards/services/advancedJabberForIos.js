import axios from 'axios';
 import { URL } from '../utility/url';
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
 export async function CallsToJabberForIOSBySIPTrunk (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-iOS-by-sIP-trunk', body, config); 
 
 }
 export async function CallsFromJabberForIOSBySIPTrunk (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-iOS-by-sIP-trunk', body, config); 
 
 }
 export async function CallsFromJabberForIOSByOriginNodeIdPie (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-iOS-by-origin-node-id-pie', body, config); 
 
 }
 export async function CallsToJabberForIOSByDestinationNodeIdPie (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-iOS-by-destination-node-id-pie', body, config); 
 
 }
 export async function CallsFromJabberForIOSBySourceCodec (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-iOS-by-source-codec', body, config); 
 
 }
 export async function CallsToJabberForIOSByDestinationCodec (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-iOS-by-destination-codec', body, config); 
 
 }
 export async function CallsFromJabberForIOSBySourceTimeInterval (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-iOS-by-source-time-interval', body, config); 
 
 }
 export async function CallsToJabberForIOSBySourceTimeIntervall (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-iOS-by-source-time-intervall', body, config); 
 
 }
 export async function Top20CallingIOSSoftPhones (body) { 
 return await axios.post(URL + '/top-20-calling-iOS-soft-phones', body, config); 
 
 }
 export async function Top20CalledIOSSoftPhones (body) { 
 return await axios.post(URL + '/top-20-called-iOS-soft-phones', body, config); 
 
 }