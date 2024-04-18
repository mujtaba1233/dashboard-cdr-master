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
 export async function CallsFromIpPhones (body) { 
 return await axios.post( URL +'/calls-from-ip-phones', body, config); 
 }
 export async function CallsToIpPhones (body) { 
 return await axios.post( URL +'/calls-to-ip-phones', body, config); 
 }
 export async function CallsFromIpPhonesToIpPhones (body) { 
 return await axios.post( URL +'/calls-from-ip-phones-to-ip-phones', body, config); 
 }
 export async function CallsFromIpPhonesToIOSSoftPhones (body) { 
 return await axios.post( URL +'/calls-from-ip-phones-to-iOS-soft-phones', body, config); 
 }
 export async function CallsFromIpPhonesToJabberForAndroidSoftPhones (body) { 
 return await axios.post( URL +'/calls-from-ip-phones-to-jabber-for-android-soft-phones', body, config); 
 }
 export async function CallsFromIpPhonesToJabberForWindowsMacSoftPhones (body) { 
 return await axios.post( URL +'/calls-from-ip-phones-to-jabber-for-windows/Mac-soft-phones', body, config); 
 }
 export async function ExternalIncommingCallsToIpPhones (body) { 
 return await axios.post( URL +'/external-incomming-calls-to-ip-phones', body, config); 
 }
 export async function ExternalOutgoingCallsFromIpPhones (body) { 
 return await axios.post( URL +'/external-outgoing-calls-from-ip-phones', body, config); 
 }