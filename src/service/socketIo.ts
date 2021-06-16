import io from 'socket.io-client'
import URL from '~/service/config'

export const createWS = (NAMESPACE: any, callback: (arg0: any) => void) => {
    let socket = window.socket;
    if (!socket) {
        socket = io(URL.url, {
            transports: ['websocket'],
            query: {
                route: NAMESPACE
            }
        })
        socket.on('disconnect', () => {
            console.log('disconnect')
        })
        socket.on('connect_error', (e: any) => {
            console.log('disconnect: ', e)
        })
        socket.on('connect', () => {
            console.log('connect')
            socket.emit(NAMESPACE)
        })
    } else {
        socket.emit(NAMESPACE)
    }
    socket.on(NAMESPACE, (msg: any) => {
        callback(msg)
    })
}
