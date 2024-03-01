const jsonServer = require('json-server')

const restServer = jsonServer.create()

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

const port = 3001

restServer.use(middlewares)
restServer.use(router)

restServer.listen(port,()=>{
    console.log("rest server listening on port 3001")
})