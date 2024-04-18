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

 export async function CallCountsByOriginCUCMNodeID (body) { 
 return await axios.post(URL + '/call-counts-by-origin-cUCM-node-iD', body, config); 
 }


 export async function CallCountsByDestinationCUCMNodeID (body) { 
 return await axios.post(URL + '/call-counts-by-destination-cUCM-node-iD', body, config); 
 }

 export async function Top10SourceCUCMNodeID (body) { 
 return await axios.post(URL + '/top-10-source-cUCM-node-iD', body, config); 
 }


 export async function Top10DestinationCUCMNodeID (body) { 
 return await axios.post(URL + '/top-10-destination-cUCM-node-iD', body, config); 
 }

 export async function ClusterCallsFromCUCMNodeId (body) { 
 return await axios.post(URL + '/cluster-calls-from-cUCM-node-id', body, config); 
 }

 export async function ClusterCallsToCUCMNodeId (body) { 
 return await axios.post(URL + '/cluster-calls-to-cUCM-node-id', body, config); 
 }

 export async function ExternalOutgoingCallsBySourceNodeId (body) { 
 return await axios.post(URL + '/external-outgoing-calls-by-source-node-id', body, config); 
 }

 export async function ExternalOutgoingCallsByDestinationNodeId (body) { 
 return await axios.post(URL + '/external-outgoing-calls-by-destination-node-id', body, config); 
 }


 export async function ExternalIncommingCallsBySourceNodeId (body) { 
 return await axios.post(URL + '/external-incomming-calls-by-source-node-id', body, config); 
 }

 export async function ExternalIncommingCallsByDestinationNodeId (body) { 
 return await axios.post(URL + '/external-incomming-calls-by-destination-node-id', body, config); 
 }