// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import LobbyGames from './LobbyGames'
import { delay } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('GIVEN a list of games and a callback function', () => {
  const games = [
    { name: 'First game', id: '3f110' },
    { name: 'Second game', id: 'few39' }
  ]

  const callback = jest.fn()

  describe('WHEN this is passed to LobbyGames', () => {
    beforeEach(() => {
      ({ container, getByText } = render(<LobbyGames data={games} onGameClick={callback} />))
    })

    test('THEN the games are all listed', () => {
      expect(container).toHaveTextContent('First game')
      expect(container).toHaveTextContent('Second game')
    })

    describe('AND when the first game is clicked', () => {
      beforeEach(() => {
        fireEvent.click(getByText('First game'))
      })

      test('THEN the callback function has been called with the correct game id', () => {
        expect(callback).toHaveBeenCalled()
        const lastCallArgs = callback.mock.calls[callback.mock.calls.length - 1]
        expect(lastCallArgs).toContain('3f110')
      })
    })
  })
})