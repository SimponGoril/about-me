import Image from "next/image";
import React from "react";
import { PersonalProject } from "../types";

type ProjectTileProps = {
    project: PersonalProject
  }

export default function ProjectTile({ project }: ProjectTileProps) {
  const getUrl = (text: string, url?: string) => {
    if (!url) return
    return <a target="_blank" rel="noreferrer" className='underline hover:no-underline' href={url}>{text}</a>
  }

  return (
    <div className="container px-10 mx-auto p-3">
      <div className="container bg-slate-50 p-5 rounded-3xl">
        <div className="container bg-slate-100 p-5 rounded-3xl">
          <div className="container text-center pr-5">
            <h3 className="font-medium leading-tight text-2xl underline">{project.name}</h3>
          </div>
          <div className="flex flex-col md:flex-row mx-auto justify-center content-center pt-2">
            <div className="px-3 w-1/3  h-1/3 mx-auto ">
                <Image className="object-cover md:h-full" width="1006" height="776" src={project.img_url} alt={project.name}/>
            </div>
            <div className="w-2/3 mx-auto">
                <div>{project.description}</div>
                <div className="pt-3">
                    {getUrl("Demo", project.see_url)} {project.repo_url ? getUrl("Repo", project.repo_url) : ''}
                </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}