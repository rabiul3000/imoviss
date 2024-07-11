import { create } from 'zustand';

const userStore = create(set => ({
    user: null,
    loading: true,
    setUser: (user) => set({ user }),
    setLoading: (status) => set({ loading: status }),
}));

export default userStore;
