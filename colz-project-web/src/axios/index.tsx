import axios from 'axios';
import { config } from '../config/common';
// import SetStorageComponent, { GetStorageComponent } from './storage';
// import CrossStorage from 'cross-storage';
/**
 * [baseURL address to the server api (URL) for production]
 * @type {String}
 */

let baseURL = config().rest_url; // dev server
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 15000

// axios.interceptors.response.use((response) => {
//   console.log('response {}',response) 
//   return response;
// }, (error: any) => {
//     // Do something with response error
//     /* if (!error.response) {
//       if (error.message === 'Network Error') {
//         location.href='/404'
//       }
//     } */

//     if (error.response.status == 401) {
//         console.error("response error 401");
//     }

//     /* if (!(error.response.status >= 400 && error.response.status <= 500)) {
//       console.log('error =>', error);
//       location.href = '/404';
//     } */
//     return "rejected";
//    // return Promise.reject(error.response);
// });

export const rootURL = baseURL;
export default axios;
