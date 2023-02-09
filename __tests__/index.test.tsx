import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Index', () => {
  it('Contains hand emoji', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {name: 'Hi, I am Simon 👋'})
    expect(heading).toBeDefined()
  })
})