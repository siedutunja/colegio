import jwt from 'jsonwebtoken'
import * as CONFIG from '@/assets/config.js'

export default (to, from, next) => {
    let token = sessionStorage.getItem('token')
    if (token != null && token != '') {
        jwt.verify(token, CONFIG.SECRET_KEY, (err, data) => {
            if (err) {
                sessionStorage.clear()
                alert('¡El token ha expirado.! Es necesario iniciar una nueva sesión.')
                location.replace(CONFIG.ROOT_MODULO_LOGIN)
            } else {
                next()
            }
        })
    } else {
        sessionStorage.clear()
        alert('¡Lo sentimos, no se ha encontrado el token.! Es necesario iniciar una sesión.')
        location.replace(CONFIG.ROOT_MODULO_LOGIN)
    }
}
