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
 export async function CallsFromJabberForAndroidSoftPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-soft-phones', body, config); 
 }
 export async function CallsToJabberForAndroidSoftPhones (body) { 
 return await axios.post( URL + '/calls-to-jabber-for-android-soft-phones', body, config); 
 }
 export async function CallsFromJabberForAndroidToJabberForAndroidSoftPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-to-jabber-for-android-soft-phones', body, config); 
 }
 export async function CallsFromJabberForAndroidToJabberForWindowsMacSoftPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-to-jabber-for-windows/Mac-soft-phones', body, config); 
 }
 export async function CallsFromJabberForAndroidToJabberForIOSSoftPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-to-jabber-for-iOS-soft-phones', body, config); 
 }
 export async function CallsFromJabberForAndroidToIpPhones (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-to-ip-phones', body, config); 
 }
 export async function CallsFromJabberForAndroidToExternalDestination (body) { 
 return await axios.post( URL + '/calls-from-jabber-for-android-to-external-destination', body, config); 
 }
 export async function IncommingExternalCallsToJabberForAndroidSoftPhones (body) { 
 return await axios.post( URL + '/incomming-external-calls-to-jabber-for-android-soft-phones', body, config); 
 }