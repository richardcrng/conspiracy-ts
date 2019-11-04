// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import Role from './Role'
import { delay } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe("Reveals and hides role for an innocent player", () => {
  describe('GIVEN that Role is not passed a prop for isInAConspiracyAgainst', () => {
    beforeEach(() => {
      ({ getByText, getByRole, container } = render(<Role />));
      ({ parentElement } = container)
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(parentElement).not.toHaveTextContent(/innocent/i)
      expect(parentElement).not.toHaveTextContent(/conspiracy/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(async () => {
        fireEvent.click(getByText(/reveal role/i))
        await waitForElement(() => getByText(/your role/i))
      })

      it("THEN the player is revealed as being innocent", () => {
        expect(parentElement).toHaveTextContent(/innocent/i)
        expect(parentElement).not.toHaveTextContent(/conspiracy/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(parentElement).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(async () => {
          fireEvent.click(getByText(/hide role/i))
          await delay(100)
        })

        it("THEN the player's role is hidden again", () => {
          expect(parentElement).not.toHaveTextContent(/innocent/i)
          expect(parentElement).not.toHaveTextContent(/conspiracy/i)
        })
      })
    })
  })

  describe('GIVEN that Role is passed undefined as a prop for isInAConspiracyAgainst', () => {
    beforeEach(() => {
      ({ getByText, getByRole, container } = render(<Role inAConspiracyAgainst={undefined} />));
      ({ parentElement } = container)
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(parentElement).not.toHaveTextContent(/innocent/i)
      expect(parentElement).not.toHaveTextContent(/conspiracy/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(async () => {
        fireEvent.click(getByText(/reveal role/i))
        await waitForElement(() => getByText(/your role/i))
      })

      it("THEN the player is revealed as being innocent", () => {
        expect(parentElement).toHaveTextContent(/innocent/i)
        expect(parentElement).not.toHaveTextContent(/conspiracy/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(parentElement).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(async () => {
          fireEvent.click(getByText(/hide role/i))
          await delay(100)
        })

        it("THEN the player's role is hidden again", () => {
          expect(parentElement).not.toHaveTextContent(/innocent/i)
          expect(parentElement).not.toHaveTextContent(/conspiracy/i)
        })
      })
    })
  })
})

describe("Reveals and hides role for a conspiracist", () => {
  describe('GIVEN that Role is passed a string of a player name', () => {
    beforeEach(() => {
      ({ getByText, getByRole, container } = render(<Role inAConspiracyAgainst='Richard' />));
      ({ parentElement } = container)
    })

    it("THEN the player's role is not yet revealed", () => {
      expect(parentElement).not.toHaveTextContent(/conspiracy/i)
      expect(parentElement).not.toHaveTextContent(/richard/i)
      expect(parentElement).not.toHaveTextContent(/innocent/i)
    })

    it("AND there is 'reveal role' text shown", () => {
      expect(container).toHaveTextContent(/reveal role/i)
    })

    describe("WHEN the text 'reveal role' is clicked on", () => {
      beforeEach(async () => {
        fireEvent.click(getByText(/reveal role/i))
        await waitForElement(() => getByText(/your role/i))
      })

      it("THEN the player is revealed as being in a conspiracy against that player", () => {
        expect(parentElement).toHaveTextContent(/conspiracy/i)
        expect(parentElement).toHaveTextContent(/richard/i)
        expect(parentElement).not.toHaveTextContent(/innocent/i)
      })

      it("AND there is 'hide role' text shown", () => {
        expect(parentElement).toHaveTextContent(/hide role/i)
      })

      describe("AND the text 'hide role' is clicked on", () => {
        beforeEach(async () => {
          fireEvent.click(getByText(/hide role/i))
          await delay(100)
        })

        it("THEN the player's role is hidden again", () => {
          expect(parentElement).not.toHaveTextContent(/conspiracy/i)
          expect(parentElement).not.toHaveTextContent(/richard/i)
          expect(parentElement).not.toHaveTextContent(/innocent/i)
        })
      })
    })
  })
})