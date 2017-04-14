'use strict'

let express     = require('express')
,   serveStatic = require('serve-static')
,   path        = require('path')
,   app = express()
,   port = process.env.PORT || 3000

const routes = [
  { path: '/',                file: 'index.html' },
  { path: '/about',           file: 'about.html' },
  { path: '/invest',          file: 'invest.html' },
  { path: '/donate',          file: 'donate.html' },
  { path: '/initiatives',     file: 'initiatives.html' },
  { path: '/resources',       file: 'resources.html' },
  { path: '/contact',         file: 'contact.html' },
  { path: '/help',            file: 'help.html' },
  { path: '/issues/climate',  file: 'issues/climate.html' },
  { path: '/issues/russia',   file: 'issues/russia.html' },
  { path: '/issues/healthcare', file: 'issues/healthcare.html' },
  { path: '/issues/immigration', file: 'issues/immigration.html' },
  { path: '/issues/plannedparenthood', file: 'issues/plannedparenthood.html' },
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
