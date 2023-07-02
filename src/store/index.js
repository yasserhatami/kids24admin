import { createStore } from 'vuex';
// import VuexPersistence from 'vuex-persist';
import authModule from "./modules/auth"
import multiSelectionValues from "./modules/multiSelectionValues"

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// });

const store = createStore({
    modules: {
      auth: authModule,
      multiSelectionValues : multiSelectionValues
    },
    // plugins:[vuexLocal.plugin]
  })
  export default store;