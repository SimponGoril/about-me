import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Work from '../pages/work'
import { WorkExperience } from '../src/types'

const testJob: WorkExperience[] = [{
  name: "Oracle",
  description: "Working in corp",
  date_from: 2000,
  date_to: 2020,
  position: "Developer",
  stack: ["java"]
}]

describe('Work', () => {
  it('Shows all info about previous Work Experience', () => {
    render(<Work jobs={testJob} />)

    for (let v in Object.values(testJob)) {
      const prop = screen.findByDisplayValue(v)
      expect(prop).toBeDefined()
    }

  })
})