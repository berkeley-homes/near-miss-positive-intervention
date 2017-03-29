import test from 'tape'
import { shallow } from 'enzyme'
import React from 'react'
import Immutable from 'immutable'

import { ReportDetails, mapStateToProps }
  from '../../../src/client/containers/report_details.js'

test('<ReportDetails /> component', t => {
  const name = 'name'
  let nameSet
  const setName = name => { nameSet = name }
  const wrapper = shallow(
    <ReportDetails
      name={name}
      setName={setName}
    />
  )

  const inputs = wrapper.find('input')
  t.ok(inputs.length, 1, 'one input')

  t.equal(inputs.get(0).props.value, 'name', 'input has name set')

  const newName = 'new name'
  inputs.simulate('change', { target: { value: newName } })
  t.equal(nameSet, newName, 'correctly calls set name')

  t.end()
})

test('ReportDetails mapStateToProps', t => {
  const name = 'name'
  const state = Immutable.fromJS({ name })
  const props = mapStateToProps(state)

  t.deepEqual(props, { name }, 'name pulled from state')

  t.end()
})
