// import dependencies
import React, { ReactNode } from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import GroupListItemBooleans from './GroupListItemBooleans';

let container: HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('It converts an array of data into an appropriate list of elements', () => {
  describe('GIVEN an array of data with no ids', () => {
    beforeEach(() => {
      const data: [string, boolean][] = [
        ['Richard', true],
        ['Gregor', false],
        ['Jules', true]
      ];
      ({ container, getByText } = render(<GroupListItemBooleans data={data} />))
    })

    test('THEN it renders all of the text from the first element of each element in the array', () => {
      expect(getByText('Richard')).toBeDefined()
      expect(getByText('Gregor')).toBeDefined()
      expect(getByText('Jules')).toBeDefined()
    })

    test('AND it renders an icon for every true in the second element of each element in the array', () => {
      expect(queryAllByTestId(container, 'icon-of-ListItemIcon')).toHaveLength(2)
    })
  })
})