// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import LobbyRoom from './LobbyRoom'
import { delay } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe("GIVEN a list of players with ready status, the client's ready status as false, the client's host status as false and an onClientStatusChange", () => {
  const players = [
    { id: 'pfew30a', name: 'Richard', ready: true },
    { id: '39ajfe', name: 'Sally', ready: false },
    { id: '0avnw0', name: 'Uzman', ready: false },
    { id: '12rfhv', name: 'Marta', ready: true },
    { id: '02rf9a', name: 'Ollie', ready: true }
  ]

  const isClientReady = false
  const isClientHost = false

  let onClientStatusChange: jest.Mock

  describe('WHEN this is passed to Lobby', () => {
    beforeEach(() => {
      onClientStatusChange = jest.fn();
      ({ container, getByText } = render(
        <LobbyRoom
          isClientReady={isClientReady}
          isClientHost={isClientHost}
          onClientStatusChange={onClientStatusChange}
          players={players}
        />
      ))
    })

    test('THEN the player names are all shown', () => {
      expect(container).toHaveTextContent('Richard')
      expect(container).toHaveTextContent('Sally')
      expect(container).toHaveTextContent('Uzman')
      expect(container).toHaveTextContent('Marta')
      expect(container).toHaveTextContent('Ollie')
    })

    test('AND there are three ready icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-ready')).toHaveLength(3)
    })
  })
})