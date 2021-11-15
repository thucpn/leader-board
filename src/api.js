import axios from 'axios';

const BACKEND_URL = 'https://8a32-2402-800-6388-64d3-79d5-ea84-43b0-2c8c.ngrok.io';

const api = axios.create({ baseURL: BACKEND_URL });

api.interceptors.request.use((req) => {
	const token = localStorage.getItem('unibean-token');
	if (token) {
		req.headers.Authorization = `Bearer ${token}`;
	}
	return req;
});

export default api;
