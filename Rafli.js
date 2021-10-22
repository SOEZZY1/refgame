console.log('SABAR NGAB...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')

            //AUTO UPDATE BY FERNAZER COMOT DI SC ELAINA TOBZ WAKWAKWAK
            //INI JANGAN DI APA2 IN TAR MALAH EROR PAS START BOT
            require('./fernazer.js')
            nocache('./fernazer.js', module => console.log(`${module} is now updated!`))
            function nocache(module, cb = () => { }) {
            fs.watchFile(require.resolve(module), async () => {
            await uncache(require.resolve(module))
            cb(module)
            })
            }
            function uncache(module = '.') {
            return new Promise((resolve, reject) => {
            try {
            delete require.cache[require.resolve(module)]
            resolve()
            } catch (e) {
            reject(e)
            }
            })
            }
            
const CFonts  = require('cfonts')
CFonts.say('BASE\nBY ZX1', {
  font: 'block',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`SUBREK FERNAZER`, {
  font: 'block',
  align: 'center',
  gradient: ['red', 'magenta']
})
function start(file) {
  let args = [path.join(file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  .on('error', e => {
    console.error(e)
    fs.watchFile(args[0], () => {
      start()
      fs.unwatchFile(args[0])
    })
  })
  // console.log(p)
}
start('fernazer.js')
