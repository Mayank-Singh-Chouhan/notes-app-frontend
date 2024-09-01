import axios from 'axios';
import { create } from 'zustand'

const authStore = create((set) => ({
    loginForm: {
        email: "",
        password: ""
    },

    signupForm: {
        email: "",
        password: ""
    },

    loggedIn: null,

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value
                },
            };
        });
    },

    login: async () => {
        try {
            const { loginForm } = authStore.getState();
            await axios.post("/login", loginForm);
            set({ loggedIn: true });
        } catch (error) {
            console.log(error);
        }
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value
                },
            };
        });
    },

    signup: async () => {
        try {
            const { signupForm } = authStore.getState();
            await axios.post("/signup", signupForm);
        } catch (error) {
            console.log(error);
        }
    },

    checkAuth: async () => {
        try {
            await axios.get("/check-auth")
            set({ loggedIn: true });
        } catch (error) {
            set({ loggedIn: false });
            console.log(error)
        }
    },

    logout: async () => {
        await axios.get("/logout");
        set({loggedIn: false})
    }
}))


export default authStore;