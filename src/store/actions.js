// https://vuex.vuejs.org/en/actions.html

export default {
  salir({commit}){
    commit('actualizarUsuario', null)
  }
}
