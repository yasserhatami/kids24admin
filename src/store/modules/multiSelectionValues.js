const multiSelectionValues = {
    namespaced: true,
    state : {
        values : []
    },
    
    // getters: {
    //     getUser: (state) => {
    //         let aa = [];
    //         state.values.forEach((item)=>{
    //             aa.push(item)
    //         })
    //         return aa
    //     }
    // },
    mutations: { 
        SET_VALUES(state, payload) {
            state.values = payload   
        }
     },
    actions: { 
        setValues({commit}, payload) {
            commit('SET_VALUES', payload)
        }
     },
  }

  export default multiSelectionValues