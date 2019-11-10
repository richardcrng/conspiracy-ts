// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import LobbyRoom from './LobbyRoom'
import { delay, callArgsOfCallback } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe("GIVEN a list of players with only some ready, the client's ready status as false, the client's host status as false and an onClientStatusChange", () => {
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

  describe('WHEN this is passed to LobbyRoom', () => {
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

    test('AND there are no kick player icons shown', () => {
      expect(queryAllByTestId(container, 'LobbyRoomPlayer-kick')).toHaveLength(0)
    })

    test('AND we can see that we are waiting for players to be ready', () => {
      expect(container).toHaveTextContent(/players to be ready/i)
    })

    test("AND the player does not see a 'start game' button", () => {
      expect(container).not.toHaveTextContent(/start game/i)
    })

    describe("AND the client clicks on 'ready to begin?'", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/ready to begin/i))
      })

      test("THEN the onClientStatusChange will have been called once", () => {
        expect(onClientStatusChange).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("GIVEN a list of players with all ready, the client's ready status as true, the client's host status as false and an onClientStatusChange", () => {
  const players = [
    { id: 'pfew30a', name: 'Richard', ready: true },
    { id: '39ajfe', name: 'Sally', ready: true },
    { id: '0avnw0', name: 'Uzman', ready: true },
    { id: '12rfhv', name: 'Marta', ready: true },
    { id: '02rf9a', name: 'Ollie', ready: true }
  ]

  const isClientReady = true
  const isClientHost = false

  let onClientStatusChange: jest.Mock

  describe('WHEN this is passed to LobbyRoom', () => {
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

    test('AND there are five ready icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-ready')).toHaveLength(5)
    })
    
    test('AND there are no kick player icons shown', () => {
      expect(queryAllByTestId(container, 'LobbyRoomPlayer-kick')).toHaveLength(0)
    })

    test('AND the player can not see a close signups power', () => {
      expect(container).not.toHaveTextContent(/close signups/i)
    })

    test('AND we can see that we are waiting for the host to start the game', () => {
      expect(container).toHaveTextContent(/host to start/i)
    })

    test("AND the player does not see a 'start game' button", () => {
      expect(container).not.toHaveTextContent(/start game/i)
    })

    describe("AND the client clicks on 'ready to begin?'", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/ready to begin/i))
      })

      test("THEN the onClientStatusChange will have been called once", () => {
        expect(onClientStatusChange).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("GIVEN a list of players with all ready, the client's ready status as true, the client's host status as true, signups closed, an onClientStatusChange, an onSignupStatusChange and a handleGameStart", () => {
  const players = [
    { id: 'pfew30a', name: 'Richard', ready: true },
    { id: '39ajfe', name: 'Sally', ready: true },
    { id: '0avnw0', name: 'Uzman', ready: true },
    { id: '12rfhv', name: 'Marta', ready: true },
    { id: '02rf9a', name: 'Ollie', ready: true }
  ]

  const isClientReady = true
  const isClientHost = true
  const isSignupClosed = true

  let handleGameStart: jest.Mock
  let onClientStatusChange: jest.Mock

  describe('WHEN this is passed to LobbyRoom', () => {
    beforeEach(() => {
      handleGameStart = jest.fn();
      onClientStatusChange = jest.fn();
      ({ container, getByText } = render(
        <LobbyRoom
          handleGameStart={handleGameStart}
          isClientReady={isClientReady}
          isClientHost={isClientHost}
          isSignupClosed={isSignupClosed}
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

    test('AND there are five ready icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-ready')).toHaveLength(5)
    })

    test('AND there are five kick player icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-kick')).toHaveLength(5)
    })

    test('AND the player can see their close signups power', () => {
      expect(container).toHaveTextContent(/close signups/i)
    })

    test('AND the player is told that they can start the game', () => {
      expect(container).toHaveTextContent(/ready for you to start/i)
    })

    test("AND there is a button for 'start game'", () => {
      expect(container).toHaveTextContent(/start game/i)
    })

    describe("AND the player clicks on the start game button", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/start game/i))
      })

      test("THEN the handleGameStart function is called once", () => {
        expect(handleGameStart).toHaveBeenCalledTimes(1)
      })
    })
  })
})

describe("GIVEN a list of players with not all ready, the client's ready status as true, the client's host status as true, an onClientStatusChange, an onPlayerClick and a handleGameStart", () => {
  const players = [
    { id: 'pfew30a', name: 'Richard', ready: true },
    { id: '39ajfe', name: 'Sally', ready: true },
    { id: '0avnw0', name: 'Uzman', ready: true },
    { id: '12rfhv', name: 'Marta', ready: true },
    { id: '02rf9a', name: 'Ollie', ready: false }
  ]

  const isClientReady = true
  const isClientHost = true

  let handleGameStart: jest.Mock
  let onClientStatusChange: jest.Mock
  let onPlayerClick: jest.Mock

  describe('WHEN this is passed to LobbyRoom', () => {
    beforeEach(() => {
      handleGameStart = jest.fn();
      onClientStatusChange = jest.fn();
      onPlayerClick = jest.fn();
      ({ container, getByText } = render(
        <LobbyRoom
          handleGameStart={handleGameStart}
          isClientReady={isClientReady}
          isClientHost={isClientHost}
          onClientStatusChange={onClientStatusChange}
          onPlayerClick={onPlayerClick}
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

    test('AND there are four ready icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-ready')).toHaveLength(4)
    })

    test('AND there are five kick player icons shown', () => {
      expect(getAllByTestId(container, 'LobbyRoomPlayer-kick')).toHaveLength(5)
    })

    test('AND the player is told that they are waiting for players to be ready', () => {
      expect(container).toHaveTextContent(/players to be ready/i)
    })

    test("AND there is a button for 'start game'", () => {
      expect(container).toHaveTextContent(/start game/i)
    })

    describe("AND the player clicks on a player", () => {
      beforeEach(() => {
        fireEvent.click(getByText('Sally'))
      })

      test("THEN the onPlayerClick function is called once", () => {
        expect(onPlayerClick).toHaveBeenCalledTimes(1)
      })

      test("AND it has been called with the right player's information as the second argument", () => {
        const argsCalledWith = callArgsOfCallback(onPlayerClick)
        expect(argsCalledWith[1]).toEqual({ id: '39ajfe', name: 'Sally', ready: true })
      })
    })

    describe("AND the player clicks on the start game button", () => {
      beforeEach(() => {
        fireEvent.click(getByText(/start game/i))
      })

      test("THEN the handleGameStart function is not called", () => {
        expect(handleGameStart).not.toHaveBeenCalled()
      })
    })
  })
})