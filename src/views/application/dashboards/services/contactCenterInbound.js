import axios from 'axios';
import { URL } from '../utility/url';
import store from '../store'
import { addProgress } from '../slices/progressSlice';
let totalProgress = {
  total: 6,
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
 export async function ContactCenterInbound18003331111 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331111', body, config); 
 }
 export async function ContactCenterInbound18003331112 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331112', body, config); 
 }
 export async function ContactCenterInbound18003331113 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331113', body, config); 
 }
 export async function ContactCenterInbound18003331114 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331114', body, config); 
 }
 export async function ContactCenterInbound18003331115 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331115', body, config); 
 }
 export async function ContactCenterInbound18003331116 (body) { 
 return await axios.post( URL + '/contact-center-inbound-18003331116', body, config); 
 }