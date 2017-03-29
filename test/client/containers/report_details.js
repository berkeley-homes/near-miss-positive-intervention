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

  const description = 'description'
  let descriptionSet
  const setDescription = description => { descriptionSet = description }

  const wrapper = shallow(
    <ReportDetails
      name={name}
      description={description}
      setName={setName}
      setDescription={setDescription}
    />
  )

  const inputs = wrapper.find('input')
  t.equal(inputs.length, 2, 'one input')

  t.equal(inputs.get(0).props.value, 'name', 'input has name set')
  t.equal(inputs.get(1).props.value, 'description', 'input has description set')

  const newName = 'new name'
  inputs.at(0).simulate('change', { target: { value: newName } })
  t.equal(nameSet, newName, 'correctly calls set name')

  const newDescription = 'new description'
  inputs.at(1).simulate('change', { target: { value: newDescription } })
  t.equal(descriptionSet, newDescription, 'correctly calls set name')

  t.end()
})

test('ReportDetails mapStateToProps', t => {
  const name = 'name'
  const description = 'description'
  const state = Immutable.fromJS({ name, description })
  const props = mapStateToProps(state)

  t.deepEqual(
    props,
    { name, description },
    'name and description pulled from state'
  )

  t.end()
})
