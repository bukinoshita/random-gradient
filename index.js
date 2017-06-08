
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
        return `linear-gradient(to top right, ${c1_}, ${c2})`

      case 'radial':
        return `radial-gradient(circle, ${c1_}, ${c2})`

      case 'horizontal':
        return `linear-gradient(${c1_}, ${c2})`

      case 'vertical':
        return `linear-gradient(to right, ${c1_}, ${c2})`

      default:
        return `linear-gradient(to top right, ${c1_}, ${c2})`
    }
  }

  throw new TypeError('uid is required')
}
