import axios from 'axios';

const API_URL = 'http://localhost:3000/';

class AuthService {
    async login(user) {
        try {
            const response = await axios.post(`${API_URL}login`, {
                email: user.email,
                password: user.password
            });

            if (response.data.metadata.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data.metadata));
            }
            return response.data;
        } catch (error) {
            return error;
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        try {
            const response = await axios.post(`${API_URL}register`, {
                username: user.username,
                email: user.email,
                password: user.password
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async handleOTP(user) {
        try {
            const response = await axios.post(`${API_URL}handle-OTP`, {
                email: user.email
            });
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async resetPassword(user) {
        try {
            const response = await axios.post(
                `${API_URL}passwordReset`,
                {
                    password: user.password
                },
                {
                    params: {
                        token: user.token,
                        email: user.email
                    }
                }
            );
            return response.data;
        } catch (error) {
            return error;
        }
    }

    async forgetPassword(email) {
        try {
            const response = await axios.get(`${API_URL}handleOTP`, {
                params: { email }
            });
            return response.data;
        } catch (error) {
            return Promise.reject(error);
        }
    }
}

export default new AuthService();
