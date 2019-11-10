// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import LobbyRoomPlayers from './LobbyRoomPlayers'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe('GIVEN a list of player names, ids and their ready status where 3 are ready', () => {
  const players = [
    { id: 'pfew30a', name: 'Richard', isReady: true },
    { id: '39ajfe', name: 'Sally', isReady: false },
    { id: '0avnw0', name: 'Uzman', isReady: false },
    { id: '12rfhv', name: 'Marta', isReady: true },
    { id: '02rf9a', name: 'Ollie', isReady: true }
  ]

  describe('WHEN this is passed to LobbyRoomPlayers', () => {
    beforeEach(() => {
      ({ container, getByText } = render(
        <LobbyRoomPlayers clientPlayer={players[0]} players={players} />
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