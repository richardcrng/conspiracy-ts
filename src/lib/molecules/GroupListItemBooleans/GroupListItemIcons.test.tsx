// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import { IoMdAddCircle } from 'react-icons/io'
import GroupListItemIcons from './GroupListItemIcons';

let container: HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('It converts an array of data into an appropriate list of elements', () => {
  describe('GIVEN an array of data with no ids', () => {
    beforeEach(() => {
      const data = [
        'Richard',
        'Gregor',
        'Jules'
      ];
      ({ container, getByText } = render(<GroupListItemIcons data={data} icon={IoMdAddCircle} />))
    })

    test('THEN it renders all of the text from the first element of each element in the array', () => {
      expect(getByText('Richard')).toBeDefined()
      expect(getByText('Gregor')).toBeDefined()
      expect(getByText('Jules')).toBeDefined()
    })

    test('AND it renders an icon for every element in the array', () => {
      expect(queryAllByTestId(container, 'icon-of-ListItemIcon')).toHaveLength(3)
    })
  })
})