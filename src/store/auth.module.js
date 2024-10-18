import AuthService from '@/service/auth.service';

const user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export default {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, user) {
            try {
                const response = await AuthService.login(user);
                if (response.status === 200) {
                    commit('loginSuccess', response.data);
                } else {
                    commit('loginFailure');
                }
                return response;
            } catch (err) {
                commit('loginFailure');
                return Promise.reject(err);
            }
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        async register({ commit }, user) {
            try {
                const response = await AuthService.register(user);
                commit('registerSuccess');
                return response;
            } catch (error) {
                commit('registerFailure');
                return Promise.reject(error);
            }
        },
        async handleOTP({ commit }, user) {
            try {
                const response = await AuthService.handleOTP(user);
                commit('handleOTPSuccess');
                return response;
            } catch (error) {
                commit('hanleOTPFailure');
                return error;
            }
        },

        async resetPassword({ commit }, user) {
            try {
                const response = await AuthService.resetPassword(user);
                commit('resetPasswordSuccess');
                return response;
            } catch (error) {
                commit('resetPasswordFailure');
                return error;
            }
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        handleOTPSuccess(state) {
            state.status.loggedIn = false;
        },
        hanleOTPFailure(state) {
            state.status.loggedIn = false;
        },
        resetPasswordSuccess(state) {
            state.status.loggedIn = false;
        },
        resetPasswordFailure(state) {
            state.status.loggedIn = false;
        }
    }
};
