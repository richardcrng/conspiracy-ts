// import dependencies
import React from 'react'

// import react-testing methods
import { render, fireEvent, waitForElement, getByTitle, Matcher, MatcherOptions, queryByTestId, getByLabelText, getAllByTestId, queryAllByTestId, queryByText, cleanup } from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom/extend-expect'

import ModalButton from './ModalButton'
import { delay } from 'utils/test-utils'

let container: HTMLElement
let parentElement: HTMLElement | null
let getByRole: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByText: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement
let getByTestId: (text: Matcher, options?: MatcherOptions | undefined) => HTMLElement

describe("Reveals and hides modal title, message and buttons", () => {
  describe('GIVEN that ModalButton is passed some example props', () => {
    beforeEach(() => {
      ({ getByText, getByRole, container } = render(
        <ModalButton
          buttons={[
            { text: 'Run away' },
            { text: 'Battle', dismissOnPress: false },
            { text: 'Capture', dismissOnPress: true }
          ]}
          title='Wild Pokémon appeared!'
          message="It's a Pikachu!"
        >
          Enter grass
        </ModalButton>
      ));
      ({ parentElement } = container)
    })

    it("THEN the button's text content is shown", () => {
      expect(container).toHaveTextContent("Enter grass")
    })

    it("AND the title, message and buttons are not yet shown", () => {
      expect(parentElement).not.toHaveTextContent("Wild Pokémon appeared!")
      expect(parentElement).not.toHaveTextContent("It's a Pikachu!")
      expect(parentElement).not.toHaveTextContent("Run away")
      expect(parentElement).not.toHaveTextContent("Capture")
    })

    describe("WHEN the button is clicked on", () => {
      beforeEach(async () => {
        fireEvent.click(getByText("Enter grass"))
        await waitForElement(() => getByText("Wild Pokémon appeared!"))
      })

      it("THEN the modal's header, message and buttons appear", () => {
        expect(parentElement).toHaveTextContent("Wild Pokémon appeared!")
        expect(parentElement).toHaveTextContent("It's a Pikachu!")
        expect(parentElement).toHaveTextContent("Run away")
        expect(parentElement).toHaveTextContent("Capture")
      })

      describe("AND a button with no dismissOnPress property is clicked", () => {
        beforeEach(async () => {
          fireEvent.click(getByText('Run away'))
          await delay(100)
        })

        it("THEN the modal is hidden again", () => {
          expect(parentElement).not.toHaveTextContent("Wild Pokémon appeared!")
          expect(parentElement).not.toHaveTextContent("It's a Pikachu!")
          expect(parentElement).not.toHaveTextContent("Run away")
          expect(parentElement).not.toHaveTextContent("Capture")
        })
      })
    })
  })
})
