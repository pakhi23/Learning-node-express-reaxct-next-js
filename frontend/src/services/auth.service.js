import { apiRequest } from '../utils/apiHelper';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export const login = async (email, password) => {
    return apiRequest(API_ENDPOINTS.LOGIN, 'POST', { email, password });
};
