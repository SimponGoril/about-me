import React from "react";
import { JobExperience } from "../../pages/work";

type JobTileProps = {
    job: JobExperience,
  }

export default function JobTile({ job }: JobTileProps) {
  const getStack = () => {
      return job.stack.map((s, i) => {
        return <li key={i}>{s}</li>
      })
    }

  return (
    <div className="container px-10 mx-auto font-mono p-3">
      <div className="container bg-opacity-20 bg-orange-300 p-5 rounded-3xl">
        <div className="container flex justify-center content-center bg-orange-400 p-5 rounded-3xl">
          <div className="container text-center w-96 pr-5">
            <div>
              <h3 className="font-medium leading-tight text-2xl underline">{job.name}</h3>
              <div>{job.position}</div>
              <div className="text-sm">{job.dateFrom} - {job.dateTo}</div>
            </div>
            
          </div>
          
        </div>
        <div className="pt-5 text-center">{job.description}</div>
        <div className="container pt-5">
          <ul className="list-disc columns-3 list-inside text-center">{getStack()}</ul>
        </div>
      </div>  
    </div>
  );
}