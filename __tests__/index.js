'use strict'

import test from 'ava'
import gradient from './../'

test('return gradient', t => {
  const res = gradient('new gradient')

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
