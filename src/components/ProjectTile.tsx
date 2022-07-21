import Image from "next/image";
import React from "react";

type ProjectTileProps = {
    project: any
  }

export default function ProjectTile({ project }: ProjectTileProps) {
  const getUrl = (url: string, text: string) => {
    if (!url) return
    return <a target="_blank" rel="noreferrer" className='underline hover:no-underline' href={url}>{text}</a>
  }

  return (
    <div className="container px-10 mx-auto font-mono p-3">
      <div className="container bg-orange-100 p-5 rounded-3xl">
        <div className="container bg-orange-400 p-5 rounded-3xl">
          <div className="container text-center pr-5">
            <h3 className="font-medium leading-tight text-2xl underline">{project.name}</h3>
          </div>
          <div className="flex justify-center content-center pt-2">
            <div className="px-3 w-1/3">
                <Image width="1006" height="776" src={project.img} alt={project.name} />
            </div>
            <div className="w-2/3">
                <div>{project.description}</div>
                <div className="pt-3">
                    {getUrl(project.seeUrl, "See")} {getUrl(project.repoUrl, "Repo")}
                </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}