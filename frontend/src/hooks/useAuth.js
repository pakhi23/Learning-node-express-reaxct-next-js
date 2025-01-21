import { apiRequest } from '../utils/apiHelper';
import { API_ENDPOINTS } from '../constants/apiEndpoints';

export const useAuth = () => {
    const registerUser = async (userData) => {
        try {
            const response = await apiRequest(API_ENDPOINTS.REGISTER, 'POST', userData);
            return response;
        } catch (error) {
            return error;
        }
    };

    return { registerUser };
};
