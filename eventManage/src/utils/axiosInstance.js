import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3004/api/dashboard/"
});

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log('response second', config);
    let currentUserData = localStorage.getItem('user');
    if (currentUserData) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['x-access-token'] = token;
        } else {
            delete config.headers['x-access-token'];
        }
    } else {
        delete config.headers['x-access-token'];
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response first');
    // console.log('instance response ', response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

// You can create/export more then one
export default axiosInstance;