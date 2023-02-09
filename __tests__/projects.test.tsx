import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from '../pages/projects'
import { PersonalProject } from '../src/types'

const testProject: PersonalProject[] = [{
  name: "myProject",
  description: "Description about my project",
  img_url: "/url/some.jpg",
  repo_url: "https://github.com/dummy/repo",
  see_url: "https://demo.com"
}]

describe('Projects', () => {
  it('Shows all personal projects', () => {
    render(<Projects projects={testProject}/>)

    const prop_name = screen.findByDisplayValue(testProject[0].name)
    expect(prop_name).toBeDefined()

    const prop_desc = screen.findByDisplayValue(testProject[0].description)
    expect(prop_desc).toBeDefined()

    expect(screen.getByText('Demo').closest('a')).toHaveAttribute('href', testProject[0].see_url)
    expect(screen.getByText('Repo').closest('a')).toHaveAttribute('href', testProject[0].repo_url)
    expect(screen.getByAltText(testProject[0].name)).toBeDefined()
  })
})