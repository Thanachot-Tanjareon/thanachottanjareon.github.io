class Skills {
    public skills: {[skill__type: string]: {
        skill: string
        icon: string
    }[]} = {}
    private dom: string = "";

    constructor(props: any) {
        this.skills = props;

        Object.keys(this.skills).map((skill_type: string): void => {
            this.dom += `
                <h4>${skill_type} skill</h4>
                <div class="${skill_type}__wrapper skills">
                    ${Object.values(this.skills[skill_type]).map((skills: {skill: string, icon: string}): string => {
                        return (`
                            <div class="${skills.skill}__list skill">
                                <div class="${skills.skill}__icon skill__icon --userSelect-none">
                                    <img src="${skills.icon}" alt="${skills.skill} icon" loading="lazy" />
                                </div>
                                <p>${skills.skill}</p>
                            </div>
                        `);
                    })}
                </div>
            `.replaceAll(",", "");
        });
    }

    public Layout(): string {
        return (`
            <div class="skills__wrapper">
                <h3 class="title">Skills</h3>

                <div class="skills__list">
                    ${this.dom}
                </div>
            </div>
        `);
    }
}

export default Skills;