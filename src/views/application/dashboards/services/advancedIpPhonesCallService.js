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
 export async function CallsFromIpPhonesBySIPTrunk (body) { 
 return await axios.post( URL + '/calls-from-ip-phones-by-sIP-trunk', body, config); 
 }
 export async function CallsToIpPhonesBySIPTrunk (body) { 
 return await axios.post( URL + '/calls-to-ip-phones-by-sIP-trunk', body, config); 
 }
 export async function CallsFromIpPhonesByOriginNodeIdPie (body) { 
 return await axios.post( URL + '/calls-from-ip-phones-by-origin-node-id-Pie', body, config); 
 }
 export async function CallsToIpPhonesByDestinationNodeIdPie (body) { 
 return await axios.post( URL + '/calls-to-ip-phones-by-destination-node-id-Pie', body, config); 
 }
 export async function CallsFromIpPhoneBySourceCodecAudio (body) { 
 return await axios.post( URL + '/calls-from-ip-phone-by-source-codec-Audio', body, config); 
 }
 export async function CallsToIpPhonesByDestinationCodecAudio (body) { 
 return await axios.post( URL + '/calls-to-ip-phones-by-destination-codec-Audio', body, config); 
 }
 export async function CallsFromIpPhonesBySourceTimeInterval (body) { 
 return await axios.post( URL + '/calls-from-ip-phones-by-source-time-interval', body, config); 
 }
 export async function CallsToIpPhonesBySourceTimeInterval (body) { 
 return await axios.post( URL + '/calls-to-ip-phones-by-source-time-interval', body, config); 
 }
 export async function Top20CalledIpPhones (body) { 
 return await axios.post( URL + '/top-20-called-ip-phones', body, config); 
 }
 export async function Top20CallingIpPhones (body) { 
 return await axios.post( URL + '/top-20-calling-ip-phones', body, config); 
 }