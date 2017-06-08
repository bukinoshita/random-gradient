
'use strict'

const hash = require('string-hash')
const color = require('tinycolor2')

module.exports = (uid, type = 'diagonal') => {
  if (uid) {
    const n = hash(uid)
    const c1 = color({h: n % 360, s: 0.95, l: 0.5})
    const c1_ = c1.toHexString()
    const c2 = c1.triad()[1].toHexString()

    switch (type) {
      case 'diagonal':
        return `linear-gradient(45deg, ${c1_} 10%, ${c2} 100%)`
        break

      case 'radial':
        return `radial-gradient(${c1_}, ${c2})`
        break
    }
  }

  throw new TypeError('uid is required')
}
