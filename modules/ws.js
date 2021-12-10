const WebSocket = require('ws')
const wss = new WebSocket.Server({ noServer: true })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log('received: %s', message);
    })
    ws.send('Hello')
})

export default function () {
    this.nuxt.hook('listen', server => {
        server.on('upgrade', (request, socket, head) => {
            wss.handleUpgrade(request, socket, head, ws => {
                wss.emit('connection', ws);
            })
        })
    })
}