// https://vuex.vuejs.org/en/getters.html

export default {
  saludo(state){

    if(!state.usuario) {return ''}

    return  `¡Bienvenido ${state.usuario.nombres}!`

  },

  Despadida(state){

    if(!state.usuario) {return ''}

    return  `Espero que regreses pronto por aquí ${state.usuario.nombres}!`

  }
}
