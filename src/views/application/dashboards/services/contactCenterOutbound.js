import axios from 'axios';
import { URL } from '../utility/url';
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 4,
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
 export async function ContactCenterOutbound18003334451 (body) { 
 return await axios.post (URL +'/contact-center-outbound-18003334451', body, config); 
 }
 export async function ContactCenterOutbound18002704560 (body) { 
 return await axios.post (URL +'/contact-center-outbound-18002704560', body, config); 
 }
 export async function ContactCenterOutbound18003334444 (body) { 
 return await axios.post (URL +'/contact-center-outbound-18003334444', body, config); 
 }
 export async function ContactCenterOutbound18007896540 (body) { 
 return await axios.post (URL +'/contact-center-outbound-18007896540', body, config); 
 }