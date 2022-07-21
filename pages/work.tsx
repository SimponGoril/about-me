import type { NextPage } from 'next'
import Head from 'next/head'
import JobTile from '../src/components/JobTile'
import Menu from '../src/components/Menu'

export type JobExperience = {
  name: string,
  description: string,
  position: string,
  dateFrom: string,
  dateTo: string,
  stack: string[]
}

const jobs: JobExperience[] = [
  {
    name: "SAP Concur",
    description: "Creating AWS health & compliance tools. Project Turncode - serverless Github policy runner",
    position: "Senior Software Developer",
    dateFrom: "2022",
    dateTo: "current",
    stack: ["Python", "AWS", "Lambda", "Docker", "Git"]
  },{
    name: "CA / Broadcom / Perfoce",
    description: "Fullstack web developer for projects TDM, DataMaker, Blazemeter based around synthetic data generation. Hackaton 2nd place: BlazeData JMeter plugin project",
    position: "Senior R&D Software Developer Level 3",
    dateFrom: "2018",
    dateTo: "2022",
    stack: ["TypeScript", "React", "Express", "Jenkins", "Yarn", "Jest", "Monaco Editor", "Docker", "Webpack5"]
  },{
    name: "Telefónica O2 CZ",
    description: "Collaborating on new version of customer facing CRM written in Java / Liferay (Portlet framework)",
    position: "Software Developer",
    dateFrom: "2017",
    dateTo: "2018",
    stack: ["Java", "Portlets", "Liferay", "Spring", "Hibernate", "Elasticsearch", "Jenkins", "Maven"]
  },{
    name: "Winsite",
    description: "Fullstack web developer for idea marketplace project",
    position: "Web Developer",
    dateFrom: "2017",
    dateTo: "2017",
    stack: ["Java", "Spring", "Hibernate", "Postgresql", "Jenkins", "Maven", "Javascript", "AngularJS", "HTML5", "Less", "NodeJS"]
  },{
    name: "TravelHolding",
    description: "Lead generation and site analysis for Czech tour providers with millions in online spends annualy - Blue Style & TravelPortal.cz. Leading team of two (graphic designer & CW), experiences with special projects (CPEX, GSP, FB multiads etc.)",
    position: "Web Marketing Specialist",
    dateFrom: "2013",
    dateTo: "2017",
    stack: ["PPC", "Affiliate", "Display", "Newsletters (Apsis)", "Google Analytics", "RTB"]
  },{
    name: "Happywinter.com",
    description: "Kickstarting eshop for people with unique clothing style",
    position: "Owner",
    dateFrom: "2013",
    dateTo: "2013",
    stack: ["E-commerce", "Prestashop", "Content", "UOL", "Google Analytics"]
  },{
    name: "Masanta.com",
    description: "Managing eshops with annual income over 1 milion CZK. Affiliate manager of SWORP.net. Project manager of developing crowdsourcing project",
    position: "Junior Project Manager",
    dateFrom: "2009",
    dateTo: "2013",
    stack: ["E-commerce", "Affiliate", "PPC", "Content", "UOL"]
  }
]

const Work: NextPage = () => {
  const getJobTiles = () => {
    return jobs.map((j, i) => {
      return <JobTile key={i} job={j} />
    })
  }

  return (
    <>
      <Head>
        <title>Simon Moravec - Work Experience</title>
      </Head>
      <Menu />
      <div className={"container lg:px-40 mx-auto font-mono"}>
        <main className='container pt-20'>
          <h1 className='text-center font-medium leading-tight text-5xl mt-0 mb-2'>Work Experience</h1>
          {getJobTiles()}
        </main>
      </div>
    </>
  )
}

export default Work
