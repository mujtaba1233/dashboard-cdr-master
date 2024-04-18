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
 export async function CallsToJabberForIOSSoftPhones (body) { 
 return await axios.post( URL +'/calls-to-jabber-for-iOS-soft-phones', body, config); 
 }
 export async function CallsFromJabberForIOSSoftPhones (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-soft-phones', body, config); 
 }
 export async function CallsFromJabberForIOSToIpPhones (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-to-ip-phones', body, config); 
 }
 export async function CallsFromJabberForIOSSoftPhonesToJabberForIOS (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-soft-phones-to-jabber-for-iOS', body, config); 
 }
 export async function CallsFromJabberForIOSToJabberForWindowsMac (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-to-jabber-for-windows/Mac', body, config); 
 }
 export async function CallsFromJabberForIOSToJabberForIOSSoftPhones (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-to-jabber-for-iOS-soft-phones', body, config); 
 }
 export async function CallsFromJabberForIOSToExternalDestination (body) { 
 return await axios.post( URL +'/calls-from-jabber-for-iOS-to-external-destination', body, config); 
 }
 export async function ExternalCallsToJabberForIOSSoftPhones (body) { 
 return await axios.post( URL +'/external-calls-to-jabber-for-iOS-soft-phones', body, config); 
 }