'use strict'

let express     = require('express')
,   serveStatic = require('serve-static')
,   path        = require('path')
,   ejs         = require('ejs')
,   app = express()
,   port = process.env.PORT || 3000

app.use(serveStatic(path.join(__dirname, 'dist')))

app.listen(port, () => {
  console.log('App listening on port ' + port)
})
