// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Lobby from './Lobby'
import { delay } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('GIVEN a list of games, a game click handler and a create game handler', () => {
  const games = [
    { name: 'First game', id: '3f110' },
    { name: 'Second game', id: 'few39' }
  ]

  let handleGameClick: jest.Mock
  let handleCreateGame: jest.Mock

  describe('WHEN this is passed to Lobby', () => {
    beforeEach(() => {
      handleGameClick = jest.fn();
      handleCreateGame = jest.fn();
      ({ container, getByText } = render(
        <Lobby
          data={games}
          onGameClick={handleGameClick}
          onHostNew={handleCreateGame}
        />
      ))
    })

    test('THEN the games are all listed', () => {
      expect(container).toHaveTextContent('First game')
      expect(container).toHaveTextContent('Second game')
    })

    test('AND a host new button is listed', () => {
      expect(container).toHaveTextContent(/host new/i)
    })

    describe('AND when the first game is clicked', () => {
      let lastCallArgs: any[]
      beforeEach(() => {
        fireEvent.click(getByText('First game'))
        lastCallArgs = handleGameClick.mock.calls[handleGameClick.mock.calls.length - 1]
      })

      test('THEN the handleGameClick function has been called with the correct game id', () => {
        expect(handleGameClick).toHaveBeenCalled()
        expect(lastCallArgs).toContain('3f110')
        expect(handleCreateGame).not.toHaveBeenCalled()
      })

      test('AND the second argument specifically is game id', () => {
        expect(lastCallArgs[1]).toBe('3f110')
      })
    })

    describe('AND when the host new button is clicked', () => {
      let lastCallArgs: any[]
      beforeEach(() => {
        fireEvent.click(getByText(/host new/i))
        lastCallArgs = handleGameClick.mock.calls[handleGameClick.mock.calls.length - 1]
      })

      test('THEN the handleCreateGame function has been calle', () => {
        expect(handleCreateGame).toHaveBeenCalled()
        expect(handleGameClick).not.toHaveBeenCalled()
      })
    })
  })
})