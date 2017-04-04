import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'
import Submit from '../../../src/client/components/submit.js'

test('form has send button', t => {
  let hasSubmitted = false
  const submit = () => { hasSubmitted = true }

  const disabled = shallow(<Submit enabled={false} submit={submit} />)

  t.ok(disabled.html().includes('disabled.svg'), 'shows disabled image')
  disabled.find('img').simulate('click')
  t.notOk(hasSubmitted, 'click does nothing')

  const enabled = shallow(<Submit enabled submit={submit} />)
  t.ok(enabled.html().includes('enabled.svg'), 'shows enabled image')
  enabled.find('img').simulate('click')
  t.ok(hasSubmitted, 'click triggers submit')

  t.end()
})
