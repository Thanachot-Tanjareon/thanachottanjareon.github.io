class Contacts {
    public contacts: {[key: string]: {
        icon?: {
            url: string
            icon_explaination: string
        },
        text: string,
        url?: string
    }} = {};
    public dom: string = "";

    public constructor(props: any) {
        this.contacts = props;

        Object.keys(this.contacts).map((key: string): void => {
            if (key === "gmail") {
                this.dom += `
                    <div class="${this.contacts[key].text}__contact contact">
                        ${(this.contacts[key].icon)? `
                            <div class="${this.contacts[key].text}__icon contact__icon --userSelect-none">
                                <img src="${this.contacts[key].icon?.url}" alt="${this.contacts[key].icon?.icon_explaination}" loading="lazy" />
                            </div>
                        `: `
                            <div class="${this.contacts[key].text}__icon contact__icon bi bi-envelop-fill"></div>
                        `}
                        <p>${this.contacts[key].text}</p>
                    </div>
                `;
            } else {
                this.dom += `
                    <div class="${this.contacts[key].text}__contact contact">
                        <a href="${this.contacts[key].url}">
                            ${(this.contacts[key].icon)? `
                                <div class="${this.contacts[key].text}__icon contact__icon --userSelect-none">
                                    <img src="${this.contacts[key].icon?.url}" alt="${this.contacts[key].icon?.icon_explaination}" loading="lazy" />
                                </div>
                            `: `
                                <div class="${this.contacts[key].url}__icon contact__icon bi bi-facebook"></div>
                            `}
                            <p>${this.contacts[key].text}</p>
                        </a>
                    </div>
                `;
            }
        });
    }

    public Layout(): string {
        const component = (): string => `
            <div class="contacts__wrapper">
                <h3 class="title">Contacts</h3>

                <div class="contacts__list">
                    ${this.dom}
                </div>
            </div>
        `;

        return component();
    }
}

export default Contacts;