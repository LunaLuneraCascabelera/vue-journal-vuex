
import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'

// Create a new store instance.
const store = createStore({
    //lo que va aqui dentro es la def de móudlos
    modules: {
        journal
    }
})

export default store
