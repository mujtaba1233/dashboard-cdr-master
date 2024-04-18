import axios from 'axios';
import { URL } from '../utility/url';
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
 export async function CallsFromJabberForWindowsMac (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac', body, config); 
 }
 export async function CallsToJabberForWindowsMac (body) { 
 return await axios.post( URL + '/calls-to-jabber-for-windows/Mac', body, config); 
 }
 export async function CallsFromJabberForWindowsMacToIpPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac-to-ip-phones', body, config); 
 }
 export async function CallsFromJabberForWindowsMacToJabberForWindowsMac (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac-to-jabber-for-windows/Mac', body, config); 
 }
 export async function CallsFromJabberForWindowsMacToJabberForIOS (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac-to-jabber-for-iOS', body, config); 
 }
 export async function CallsFromJabberForWindowsMacToJabberForAndroid (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac-to-jabber-for-android', body, config); 
 }
 export async function CallsFromJabberForWindowsMacToExternalDestination (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-windows/Mac-to-external-destination', body, config); 
 }
 export async function ExternalIncommingCallsToJabberForWindowsMac (body) { 
 return await axios.post( URL + '/external-incomming-calls-to-jabber-for-windows/Mac', body, config); 
 }