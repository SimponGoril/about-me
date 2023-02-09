import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from '../pages/about'

const kanyes_quote = "We've gotten comfortable with not having what we deserve"

describe('About', () => {
  it('Contains a quote from Kanye West', () => {
    render(<About kanyes_quote={kanyes_quote} />)
    expect(screen.queryByDisplayValue(kanyes_quote)).toBeDefined()
  })

  it('Contains a note about me drinking coffee', () => {
    render(<About kanyes_quote={""} />)
    expect(screen.queryByDisplayValue("coffee")).toBeDefined()
  })
})