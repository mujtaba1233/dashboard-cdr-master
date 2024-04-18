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


 export async function CallsFromJabberForAndroidBySIPTrunk (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-android-by-sIP-trunk', body, config); 
 }

 export async function CallsToJabberForAndroidBySIPTrunk (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-android-by-sIP-trunk', body, config); 
 }


 export async function CallsFromJabberForAndroidByOriginNodeIdPie (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-android-by-origin-node-id-pie', body, config); 
 }


 export async function CallsToJabberForAndroidByDestinationNodeIdPie (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-android-by-destination-node-id-pie', body, config); 
 }

 export async function CallsFromJabberForAndroidBySourceCodec (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-android-by-source-codec', body, config); 
 }

 export async function CallsToJabberForAndroidByDestinationCodec (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-android-by-destination-codec', body, config); 
 }


 export async function CallsToJabberForAndroidBySourceTimeInterval (body) { 
 return await axios.post(URL + '/calls-to-jabber-for-android-by-source-time-interval', body, config); 
 
 }


 export async function CallsFromJabberForAndroidBySourceTimeInterval (body) { 
 return await axios.post(URL + '/calls-from-jabber-for-android-by-source-time-interval', body, config); 
 }


 export async function Top20CalledJabberForAndroidSoftPhones (body) { 
 return await axios.post(URL + '/top-20-called-jabber-for-android-soft-phones', body, config); 
 }


 export async function Top20CallingJabberForAndroidSoftPhones (body) { 
 return await axios.post(URL + '/top-20-calling-jabber-for-android-soft-phones', body, config); 
 }