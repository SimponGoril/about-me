import ProjectTile from "../src/components/projectTile";
import { PersonalProject } from "../src/types";
import Menu from "../src/components/menu";
import { NextPage } from "next";
import cv from '../public/cv.json';
import Head from "next/head";

type ProjectsProps = {
  projects: PersonalProject[]
}

const Projects: NextPage<ProjectsProps> = ({ projects = [] }) => {

  const getProjectTiles = () => {
    return projects.map((j, i) => {
      return <ProjectTile key={i} project={j} />
    })
  }

  return (
    <>
      <Head>
        <title>Simon Moravec - Personal Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className='container'>
        <div className="container lg:px-40 pt-20 flex flex-col">
          <div className="container lg:px-40">
            <div className='container'>
              <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>Personal Projects</h1>
              {getProjectTiles()}
            </div>
          </div>
        </div>
      </main>
    </>
  )
};

export async function getStaticProps(context: ProjectsProps) {
  return {
    props: {
      projects: cv.personal_projects
    },
  }
}

export default Projects