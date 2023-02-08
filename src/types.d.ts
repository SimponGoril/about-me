
export type PersonalInfo = {
    name: string,
    year_of_birth: number,
    current_location: string,
    languages: {
        [key: string]: string
    }
}

export type WorkExperience = {
    name: string,
    description: string,
    position: string,
    date_from: number,
    date_to: number | string,
    stack: string[]
}

export type School = {
    name: string,
    description: string,
    type: string
    date_from: number,
    date_to: number,
}

enum CertificateField {

}
export type Certificate = {
    name: string,
    issuer: string,
    field: "Web Analytics" | "IT" | "Marketing" 
}

export type PersonalProject = {
    name: string,
    description: string,
    img_url: string,
    repo_url?: string,
    see_url?: string
}

export type CV = {
    personal: PersonalInfo
    education: {
        schools: School[],
        certificates: Certificate[]
    }
    work_experience: WorkExperience[]
    personal_projects: PersonalProject[]
}