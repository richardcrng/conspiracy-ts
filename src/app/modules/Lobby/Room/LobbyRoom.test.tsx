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

describe("Non-host", () => {
  describe("GIVEN a list of players with only some ready, the client's ready status as false, the client's host status as false and an onClientStatusChange", () => {
    const players = [
      { id: 'pfew30a', name: 'Richard', isReady: true, isHost: false },
      { id: '39ajfe', name: 'Sally', isReady: false },
      { id: '0avnw0', name: 'Uzman', isReady: false },
      { id: '12rfhv', name: 'Marta', isReady: true },
      { id: '02rf9a', name: 'Ollie', isReady: true }
    ]

    let onClientStatusChange: jest.Mock

    describe('WHEN this is passed to LobbyRoom', () => {
      beforeEach(() => {
        onClientStatusChange = jest.fn();
        ({ container, getByText } = render(
          <LobbyRoom
            clientPlayer={players[0]}
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

      test("AND there is a 'leave game' button", () => {
        expect(container).toHaveTextContent(/leave game/i)
      })
    })
  })

  describe("GIVEN a list of players with all ready, the client's ready status as true, the client's host status as false and an onClientStatusChange", () => {
    const players = [
      { id: 'pfew30a', name: 'Richard', isReady: true, isHost: false },
      { id: '39ajfe', name: 'Sally', isReady: true },
      { id: '0avnw0', name: 'Uzman', isReady: true },
      { id: '12rfhv', name: 'Marta', isReady: true },
      { id: '02rf9a', name: 'Ollie', isReady: true }
    ]

    let onClientStatusChange: jest.Mock

    describe('WHEN this is passed to LobbyRoom', () => {
      beforeEach(() => {
        onClientStatusChange = jest.fn();
        ({ container, getByText } = render(
          <LobbyRoom
            clientPlayer={players[0]}
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
})

describe("Host", () => {
  describe("GIVEN a list of players with all ready, the client's ready status as true, the client's host status as true, signups closed, an onClientStatusChange, an onSignupStatusChange and a handleGameStart", () => {
    const players = [
      { id: 'pfew30a', name: 'Richard', isReady: true, isHost: true },
      { id: '39ajfe', name: 'Sally', isReady: true },
      { id: '0avnw0', name: 'Uzman', isReady: true },
      { id: '12rfhv', name: 'Marta', isReady: true },
      { id: '02rf9a', name: 'Ollie', isReady: true }
    ]

    const isSignupClosed = true

    let handleGameDisband: jest.Mock
    let handleGameStart: jest.Mock
    let onClientStatusChange: jest.Mock
    let onSignupStatusChange: jest.Mock

    describe('WHEN this is passed to LobbyRoom', () => {
      beforeEach(() => {
        handleGameDisband = jest.fn();
        handleGameStart = jest.fn();
        onClientStatusChange = jest.fn();
        onSignupStatusChange = jest.fn();
        ({ container, getByText } = render(
          <LobbyRoom
            clientPlayer={players[0]}
            handleGameDisband={handleGameDisband}
            handleGameStart={handleGameStart}
            isSignupClosed={isSignupClosed}
            onClientStatusChange={onClientStatusChange}
            onSignupStatusChange={onSignupStatusChange}
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

      test('AND there are four kick player icons shown', () => {
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

      describe("AND the client clicks on 'close signups'", () => {
        beforeEach(() => {
          fireEvent.click(getByText(/close signups/i))
        })

        test("THEN the onSignupStatusChange callback has been called once", () => {
          expect(onSignupStatusChange).toHaveBeenCalledTimes(1)
        })
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

  describe("GIVEN a list of players with not all ready, the client's ready status as true, the client's host status as true, an onClientStatusChange a handleGameStart and a handlePlayerKick", () => {
    const players = [
      { id: 'pfew30a', name: 'Richard', isReady: true, isHost: true },
      { id: '39ajfe', name: 'Sally', isReady: true },
      { id: '0avnw0', name: 'Uzman', isReady: true },
      { id: '12rfhv', name: 'Marta', isReady: true },
      { id: '02rf9a', name: 'Ollie', isReady: false }
    ]

    let handleGameDisband: jest.Mock
    let handleGameStart: jest.Mock
    let handlePlayerKick: jest.Mock
    let onClientStatusChange: jest.Mock

    describe('WHEN this is passed to LobbyRoom', () => {
      beforeEach(() => {
        handleGameDisband = jest.fn();
        handleGameStart = jest.fn();
        handlePlayerKick = jest.fn();
        onClientStatusChange = jest.fn();
        ({ container, getByText } = render(
          <LobbyRoom
            clientPlayer={players[0]}
            handleGameDisband={handleGameDisband}
            handleGameStart={handleGameStart}
            handlePlayerKick={handlePlayerKick}
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

      describe("AND the player clicks on a non-host player", () => {
        beforeEach(async () => {
          fireEvent.click(getByText('Sally'))
          await delay(100)
        })

        test("THEN a message appears asking if the host wants to kick the player", () => {
          expect(container.parentElement).toHaveTextContent(/do you want to kick Sally/i)
        })

        test('AND there is a cancel and confirm button', () => {
          expect(container.parentElement).toHaveTextContent(/cancel/i)
          expect(container.parentElement).toHaveTextContent(/confirm/i)
        })

        describe('AND the player clicks on cancel', () => {
          beforeEach(async () => {
            fireEvent.click(getByText(/cancel/i))
            await delay(100)
          })

          test("THEN the message asking if the host wants to kick the player has disappeared", () => {
            // await waitForElement(() => getByText(/do you want to kick/i))
            expect(container.parentElement).not.toHaveTextContent(/do you want to kick Sally/i)
          })

          test("AND the handlePlayerKick callback has not been called", () => {
            expect(handlePlayerKick).not.toHaveBeenCalled()
          })
        })

        describe('AND the player clicks on confirm', () => {
          beforeEach(async () => {
            fireEvent.click(getByText(/confirm/i))
            await delay(100)
          })

          test("THEN the message asking if the host wants to kick the player has disappeared", () => {
            // await waitForElement(() => getByText(/do you want to kick/i))
            expect(container.parentElement).not.toHaveTextContent(/do you want to kick Sally/i)
          })

          test("AND the handlePlayerKick callback has been called once", () => {
            expect(handlePlayerKick).toHaveBeenCalledTimes(1)
          })

          test("AND the handlePlayerKick callback has been called with a first argument of the correct player", () => {
            expect(callArgsOfCallback(handlePlayerKick)[0]).toEqual({ id: '39ajfe', name: 'Sally', isReady: true })
          })
        })
      })

      describe("AND the player clicks on the client player, who is host,", () => {
        beforeEach(async () => {
          fireEvent.click(getByText('Richard'))
          await delay(100)
        })

        test("THEN a message appears asking if the host wants to disband the game", () => {
          expect(container.parentElement).toHaveTextContent(/do you want to disband/i)
        })

        test('AND there is a cancel and confirm button', () => {
          expect(container.parentElement).toHaveTextContent(/cancel/i)
          expect(container.parentElement).toHaveTextContent(/confirm/i)
        })

        describe('AND the player clicks on cancel', () => {
          beforeEach(async () => {
            fireEvent.click(getByText(/cancel/i))
            await delay(100)
          })

          test("THEN the message asking if the host wants to disband the game has disappeared", () => {
            // await waitForElement(() => getByText(/do you want to kick/i))
            expect(container.parentElement).not.toHaveTextContent(/do you want to disband/i)
          })

          test("AND the handleGameDisband callback has not been called", () => {
            expect(handleGameDisband).not.toHaveBeenCalled()
          })
        })

        describe('AND the player clicks on confirm', () => {
          beforeEach(async () => {
            fireEvent.click(getByText(/confirm/i))
            await delay(100)
          })

          test("THEN the message asking if the host wants to disband the game has disappeared", () => {
            // await waitForElement(() => getByText(/do you want to kick/i))
            expect(container.parentElement).not.toHaveTextContent(/do you want to disband/i)
          })

          test("AND the handleGameDisband callback has been called once", () => {
            expect(handleGameDisband).toHaveBeenCalledTimes(1)
          })
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
})