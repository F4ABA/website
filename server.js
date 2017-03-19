'use strict'

let express     = require('express')
,   serveStatic = require('serve-static')
,   path        = require('path')
,   app = express()
,   port = process.env.PORT || 3000

const routes = [
  { path: '/',          file: 'index.html' },
  { path: '/issues',    file: 'issues.html' },
  { path: '/resources', file: 'resources.html' },
  { path: '/contact',   file: 'contact.html' },
]

routes.map(pair => {
  app.get(pair.path, (req, res, next) => {
    res.sendFile(pair.file, { root: 'dist' })
  })
})

app.use(serveStatic(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log('App listening on port ' + port)
})
