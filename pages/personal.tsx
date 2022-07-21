import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../src/components/Menu'
import ProjectTile from '../src/components/ProjectTile'

const projects = [
  {
    name: "Toad Story",
    description: "Another game in ExcaliburJS, created as a proof of concept for touch controls, physics, custom camera strategy implementation and particle effects. Includes animation, sounds and randomly generated levels ",
    img: "/projects/toadstory.jpg",
    repoUrl: "https://github.com/SimponGoril/toad-story",
    seeUrl: "http://public-bucket-hosting2.s3-website.eu-central-1.amazonaws.com/",
    stack: ["", ]
  },    
  {
    name: "Crabby",
    description: "A small top-down shooting game with 5 levels. Includes spritework, animations, sounds, ui, some game mechanics - spawning spiders, reloading on rock piles, treasure chests, and more! Use Tile editor to be extended with more levels",
    img: "/projects/crabby.png",
    repoUrl: "https://github.com/SimponGoril/crabby",
    seeUrl: "http://public-bucket-hosting.s3-website.eu-central-1.amazonaws.com/",
    stack: ["", ]
  },  
  {
    name: "WordTree",
    description: "Proof of concept for relational mapping and hierarchy visualisation. Currently, you can input keywords, types of bonds between them and see visualisation in Graph window. In the future, you can select word from articles and import them in-mass",
    img: "/projects/wordtree.jpg",
    repoUrl: "https://github.com/SimponGoril/wordtree",
    seeUrl: "https://wordtree.vercel.app",
    stack: ["", ]
  },
  {
    name: "Snake",
    description: "I used RaspberryPi AstroHat joystick to create a simple Snake game implementation. ",
    img: "/projects/snake.jpg",
    seeUrl: "https://www.youtube.com/watch?v=E0eSixPusN0",
    stack: ["", ]
  },
]

const Personal: NextPage = () => {
  const getProjectTiles = () => {
    return projects.map((j, i) => {
      return <ProjectTile key={i} project={j} />
    })
  }

  return (
    <>
      <Head>
        <title>Simon Moravec - Personal Projects</title>
      </Head>
      <Menu />
      <div className={"container lg:px-40 mx-auto font-mono"}>
        <main className='container pt-20'>
            <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>Personal Projects</h1>
            {getProjectTiles()}
        </main>
      </div>
    </>
  )
}

export default Personal
