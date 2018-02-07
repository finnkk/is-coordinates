import test from 'ava'
import isCoordinates from './'

test('[45.266486, -72.147989]', (t) => {
  t.is(isCoordinates([45.266486, -72.147989]), true)
})

test('[45.266486, -72.147989], { validate: true }', (t) => {
  t.is(isCoordinates([45.266486, -72.147989], {
    validate: true
  }), true)
})

test('[45.266486, -72.147989], { validate: false }', (t) => {
  t.is(isCoordinates([45.266486, -72.147989], {
    validate: false
  }), true)
})

test('[360, 360]', (t) => {
  t.is(isCoordinates([360, 360]), false)
})

test('[360, 360], { validate: true }', (t) => {
  t.is(isCoordinates([360, 360], {
    validate: true
  }), false)
})

test('[360, 360], { validate: false }', (t) => {
  t.is(isCoordinates([360, 360], {
    validate: false
  }), true)
})

test('[45.266486, -72.147989, "unicorns"]', (t) => {
  t.is(isCoordinates([45.266486, -72.147989, 'unicorns']), false)
})

test('unicorns', (t) => {
  t.is(isCoordinates('unicorns'), false)
})
