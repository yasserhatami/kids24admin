import { createStore } from 'vuex';
// import VuexPersistence from 'vuex-persist';
import authModule from "./modules/auth"

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

const store = createStore({
    modules: {
      auth: authModule
    },
    // plugins:[vuexLocal.plugin]
  })
  export default store;