import jwt from 'jsonwebtoken'

let token = sessionStorage.getItem('tokenNav')
let tokenDecodificado = null
//let informesPA = null

if (token != null && token != '') {
  tokenDecodificado = jwt.decode(token) 
  //informesPA = tokenDecodificado.informesPA
}

let indice = 0

let menu = [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavTitle',
        _children: ['Menú Principal']
      }
    ]
  }
]
/*
if (informesPA == 1) {
  menu[0]._children.push(
    {
      _name: 'CSidebarNavItem',
      name: 'Cargar Actividades PA',
      to: '/informespa',
      icon: 'cilBraille'
    }
  )
  indice++
}
*/

menu[0]._children.push(
  {
    _name: 'CSidebarNavDropdown',
    name: 'Tramites',
    icon: 'cilFeaturedPlaylist',
    items: []
  }
)
indice++
menu[0]._children[indice].items.push({ name: 'Nueva Solicitud', to: '/consultas/consultacolegios'})
menu[0]._children[indice].items.push({ name: 'Estado Solicitud', to: '/consultaresoluciones'})

/*
menu[0]._children.push(
  {
    _name: 'CSidebarNavItem',
    name: 'Cerrar Sesión',
    to: '/login',
    icon: 'cil-lock-locked'
  }
)
*/

export default menu