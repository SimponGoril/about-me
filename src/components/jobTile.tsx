import React from "react";
import { WorkExperience } from "../types";

type JobTileProps = {
    job: WorkExperience,
  }

export default function JobTile({ job }: JobTileProps) {
  const getStack = () => {
      return job.stack.map((s, i) => {
        return <li key={i}>{s}</li>
      })
    }

  return (
    <div className="container bg-slate-50 rounded-3xl my-3">
      <div className="container flex content-end "> 
        <div className="container float-left w-2/5 text-right font-medium leading-tight text-2xl underline pr-5"><div className=" ">{job.name}</div></div>
        <div className="container text-gray-400 text-sm no-underline leading-10 text-left pl-5">({job.date_from} - {job.date_to})</div>
      </div>
      <div className="container flex content-end bg-opacity-20  ml-5 mb-3 rounded-3xl overflow-hidden">
        <div className="container float-left p-1 flex justify-center w-2/5 content-center  bg-slate-100 rounded-3xl">
          <div className="container text-right pr-5">
            <div className="font-extrabold">{job.position}</div>
            <div className="lg:text-sm">{job.description}</div>
          </div>    
        </div>
        <div className="container">
          <ul className="list-disc columns-3 list-inside pl-3">{getStack()}</ul>
        </div>
      </div>  
    </div>
  );
}