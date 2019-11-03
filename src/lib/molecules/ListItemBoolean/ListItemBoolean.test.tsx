// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import ListItemBoolean from './ListItemBoolean'

let container: HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('ListItemBoolean shows a check icon dependent on the passed boolean', () => {
  describe('GIVEN that the passed boolean is true', () => {
    beforeEach(() => {
      ({ container, getByText, getByTestId } = render(
        <ListItemBoolean boolean>
          Richard
        </ListItemBoolean>
      ))
    })

    test('THEN it shows one icon', () => {
      expect(queryAllByTestId(container, 'icon-of-ListItemIcon')).toHaveLength(1)
    })
  })

  describe('GIVEN that the passed boolean is false', () => {
    beforeEach(() => {
      ({ container, getByText, getByTestId } = render(
        <ListItemBoolean boolean={false}>
          Richard
        </ListItemBoolean>
      ))
    })

    test('THEN it does not show an icon', () => {
      expect(queryByTestId(container, 'icon-of-ListItemIcon')).toBeNull()
    })
  })

  describe('GIVEN that no boolean is passed', () => {
    beforeEach(() => {
      ({ container, getByText, getByTestId } = render(
        <ListItemBoolean>
          Richard
        </ListItemBoolean>
      ))
    })

    test('THEN it does not show an icon', () => {
      expect(queryByTestId(container, 'icon-of-ListItemIcon')).toBeNull()
    })
  })
})