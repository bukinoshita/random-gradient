'use strict'

import test from 'ava'
import gradient from './../'

test('return gradient', t => {
  const res = gradient('new gradient')
  t.truthy(res.includes('to top right'))
  t.truthy(typeof res, 'string')
})

test('return gradient diagonal', t => {
  const res = gradient('new gradient', 'diagonal')
  t.truthy(res.includes('to top right'))
  t.truthy(typeof res, 'string')
})

test('return gradient radial', t => {
  const res = gradient('new gradient', 'radial')
  t.truthy(res.includes('radial'))
  t.truthy(typeof res, 'string')
})

test('return gradient horizontal', t => {
  const res = gradient('new gradient', 'horizontal')
  t.truthy(typeof res, 'string')
})

test('return gradient vertical', t => {
  const res = gradient('new gradient', 'vertical')
  t.truthy(res.includes('to right'))
  t.truthy(typeof res, 'string')
})

test('return different gradient with different uid', t => {
  const res = gradient('new gradient')
  const res2 = gradient('another gradient')
  t.not(res, res2)
  t.truthy(typeof res, 'string')
  t.truthy(typeof res2, 'string')
})

test('throws error', t => {
  const error = t.throws(() => {
    gradient()
  }, TypeError)

  t.is(error.message, 'uid is required')
})
