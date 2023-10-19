//El "index" es lo que terminaremos importando en el store que vamos a definir. 

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import state from './state'

const journalModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default journalModule