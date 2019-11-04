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
  describe('GIVEN an array of data', () => {
    beforeEach(() => {
      const data = [
        'Richard',
        'Gregor',
        'Jules'
      ];
      ({ container, getByText } = render(<GroupListItemIcons nodes={data} icon={IoMdAddCircle} />))
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

describe('It can pass an onItemClick function down with appropriate data to pass as a second argument', () => {
  describe('GIVEN an array of core data, onItemClickData and a callback function', () => {
    let callback: jest.Mock

    beforeEach(() => {
      const data = ['Richard', 'Gregor', 'Jules'];
      const onItemClickData = [4, 11, 7];
      callback = jest.fn();
      ({ container, getByText } = render(
        <GroupListItemIcons<number>
          nodes={data}
          icon={IoMdAddCircle}
          onItemClickData={onItemClickData}
          onItemClick={callback}
        />
      ))
    })

    test('THEN it renders all of the text from the first element of each element in the array', () => {
      expect(getByText('Richard')).toBeDefined()
      expect(getByText('Gregor')).toBeDefined()
      expect(getByText('Jules')).toBeDefined()
    })

    test('AND it renders an icon for every element in the array', () => {
      expect(queryAllByTestId(container, 'icon-of-ListItemIcon')).toHaveLength(3)
    })

    describe('AND when the second data item is clicked on', () => {
      let lastCallArgs: any[]
      beforeEach(() => {
        fireEvent.click(getByText('Gregor'))
        lastCallArgs = callback.mock.calls[callback.mock.calls.length - 1]
      })

      test('THEN the callback has been called once with the onItemClickData passed in', () => {
        expect(callback).toHaveBeenCalledTimes(1)
        expect(lastCallArgs).toContain(11)
        expect(lastCallArgs).not.toContain(4)
        expect(lastCallArgs).not.toContain(7)
      })

      test("AND it is specifically the second argument that is the onItemClickData", () => {
        expect(lastCallArgs[1]).toBe(11)
      })
    })
  })
})


