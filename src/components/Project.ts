class Project {
    public projects: {[project_type: string]: {
        project: string
        project_image: string
        tech_stack?: string[]
        tools: string[]
        url: string
        source_code_url?: string
    }[] } | null = null;

    public constructor(props: {[project_type: string]: {
        project: string
        project_image: string
        tech_stack?: string[]
        tools: string[]
        url: string
        source_code_url?: string
    }[] } | null) {
        this.projects = props;
    }

    public Layout(): string {
        return (`
            <div class="my-projects__wrapper">
                <h3 class="title">My-Projects</h3>
                ${(this.projects !== null)? ``: `
                    <p class="project__notFound">Not found a projects.</p>
                `}
            </div>
        `);
    }
}

export default Project;