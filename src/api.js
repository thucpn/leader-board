import axios from 'axios';

const BACKEND_URL = 'https://eaa9-2402-800-6341-eafc-149-87c5-8d38-5479.ngrok.io';

const api = axios.create({ baseURL: BACKEND_URL });

api.interceptors.request.use((req) => {
	const token = localStorage.getItem('unibean-token');
	if (token) {
		req.headers.Authorization = `Bearer ${token}`;
	}
	return req;
});

export default api;
