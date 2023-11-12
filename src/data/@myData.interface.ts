export interface IntroInterface {
    name: string
    profileUrl: {
        url: string
        explaination_image: string
    }
    age: number
    skills: {
        [skill_type: string]: {
            skill: string
            icon: string
        }[]
    }
    shortExplaination: string[],
    qouteExplaination: string
    projects: {
        [project_type: string]: {
            project: string
            project_image: string
            tech_stack?: string[]
            tools: string[]
            url: string
            source_code_url?: string
        }[]
    } | null
    contacts: {
        [contact: string]: {
            icon?: {
                url: string
                icon_explaination: string
            }
            text: string
            url?: string
        }
    }
    copyright: {
        owner: string
        copyright_text: string
    }
}