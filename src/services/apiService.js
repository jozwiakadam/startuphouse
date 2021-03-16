import axios from 'axios';

let apiServiceInstance = null;

class ApiService {
  constructor() {
    if (apiServiceInstance) {
      return apiServiceInstance;
    }

    const headers = {
      'Content-Type': 'application/json',
    };

    apiServiceInstance = axios.create({
      baseURL: 'http://content.guardianapis.com',
      headers,
    });

    apiServiceInstance.interceptors.request.use((config) => ({
      ...config,
      headers: {
        ...config.headers,
      },
    }));

    apiServiceInstance.interceptors.response.use(
      (response) => response,
      (error) => Promise.reject(error),
    );

    return apiServiceInstance;
  }
}

export default new ApiService();
