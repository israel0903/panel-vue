/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
    {
        path: '/',
        view: 'PaginaPrincipal'
    },
    {
        path: '/panel/login',
        view: 'LoginAdmin'
    },
    {
        path: '/panel/dashboard',
        view: 'Dashboard'
    },
    {
        path: '/panel/usuarios',
        view: 'Usuarios'
    },
    {
        path: '/panel/regalos',
        view: 'Regalos'
    },
    {
        path: '/panel/categoria-eventos',
        view: 'CategoriaEventos'
    },
    {
        path: '/panel/eventos',
        view: 'Eventos'
    },
    {
        path: '/panel/pagina-principal',
        view: 'Principal'
    },
    {
        path: '/panel/administradores',
        view: 'Administradores'
    },
]
