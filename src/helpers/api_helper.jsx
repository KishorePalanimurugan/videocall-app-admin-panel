// import axios from "axios";
// import accessToken from "./jwt-token-access/accessToken";

// //pass new generated access token here
// const token = accessToken;

// //apply base url for axios
// const API_URL = "";

// const axiosApi = axios.create({
//   baseURL: API_URL,
// });

// axiosApi.defaults.headers.common["Authorization"] = token;

// axiosApi.interceptors.response.use(
//   (response) => response,
//   (error) => Promise.reject(error)
// );

// export async function get(url, config = {}) {
//   return await axiosApi
//     .get(url, { ...config })
//     .then((response) => response.data);
// }

// export async function post(url, data, config = {}) {
//   return axiosApi
//     .post(url, { ...data }, { ...config })
//     .then((response) => response.data);
// }

// export async function put(url, data, config = {}) {
//   return axiosApi
//     .put(url, { ...data }, { ...config })
//     .then((response) => response.data);
// }

// export async function patch(url, data, config = {}) {
//   return axiosApi
//     .patch(url, { ...data }, { ...config })
//     .then((response) => response.data);
// }

// export async function del(url, config = {}) {
//   return await axiosApi
//     .delete(url, { ...config })
//     .then((response) => response.data);
// }

/* eslint-disable prettier/prettier */
import axios from 'axios'
// import { refreshToken } from "./jwt-token-access/accessToken";
import getAccessToken from './jwt-token-access/accessToken'

//calling refreshAccessToken checks the expiration. if it is expired get a new token
// refreshToken();
//pass new generated access token here
// const token = getAccessToken();
// console.log("token", token);

//apply base url for axios
const API_URL = 'https://oyster-app-9e5sd.ondigitalocean.app/v1'

const axiosApi = axios.create({
  baseURL: API_URL,
})

axiosApi.interceptors.request.use(
  async (config) => {
    // Get the access token
    const token = await getAccessToken();

    // Set the token in the request headers
    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  (error) => Promise.reject(error),
)

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config }).then((response) => response.data)
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function postFormData(url, formData, config = {}) {
  // Set appropriate headers for multipart/form-data
  config = {
    ...config,
    headers: {
      'Content-Type': 'multipart/form-data',
      ...config.headers,
    },
  }

  // Make the POST request using axios
  return axiosApi.post(url, formData, config).then((response) => response.data)
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function patch(url, data, config = {}) {
  return axiosApi.patch(url, { ...data }, { ...config }).then((response) => response.data)
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config }).then((response) => response.data)
}

//-------------------------------------------------------------------------------------

