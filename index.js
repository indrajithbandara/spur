global.__SERVER__ = true
global.__BROWSER__ = false

require('./babel')
require('./log')
if(!process.argv[2] || process.argv[2] === 'api') require('./api/server')
if(!process.argv[2] || process.argv[2] === 'web') require('./website/server')