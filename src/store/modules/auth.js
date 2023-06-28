const authModule = {
    namespaced: true,
    state: () => ({ 
        user: null,
        isAuthenticated: false
    }),
    mutations: { 
        SET_USER(state, payload) {
            state.user = payload
        },
        SET_USER_AUTHENTICATED(state, flag) {
            state.isAuthenticated = flag
        }
     },
    actions: { 
        setUser({commit}, payload) {
            if(payload.token && payload.userId) {
                commit('SET_USER', payload)
                commit('SET_USER_AUTHENTICATED', true)
            }
        },
        
        setUserAuthenticated({commit}, flag) {
            commit('SET_USER_AUTHENTICATED', flag)
        }
     },
    getters: {
        getUser: (state) => state.user ,
        userIsAuthenticated: (state) => state.isAuthenticated
    }
  }

  export default authModule