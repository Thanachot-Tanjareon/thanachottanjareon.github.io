import Contacts from "./Contacts";


class Sidebar {
    private ContactsComponent!: Contacts;

    public data: {[key: string]: any} = {};

    public constructor(props: any) {
        this.data = props;

        this.ContactsComponent = new Contacts(this.data.contacts);
    }

    public Layout(): string {
        return (`
            <aside class="sidebar --display-none">
                <section class="sidebar__container">
                    <span class="bi bi-x-lg --userSelect-none --cursor-pointer"></span>
                    <div class="profile__wrapper">
                        <div class="profile__image --userSelect-none">
                            <img src="${(this.data.profileUrl.url !== "")? this.data.profileUrl.url: "https://placeholder.co/150"}" alt="${(this.data.profileUrl.explaination_image !== "")? this.data.profileUrl.explaination_image: "Secret"}" loading="lazy" />
                        </div>
                        <div class="profile__info">
                            <h1><span>Name:</span> ${(this.data.name !== "")? this.data.name: "Secret"}</h1>
                            <p><span>Age:</span> ${(this.data.age !== "")? this.data.age: "Secret"}</p>
                        </div>
                    </div>

                    <div class="sidebar__menu">
                        <a href="/" class="link__menu --userSelect-none">About</a>
                        <a href="/projects" class="link__menu --userSelect-none">My Projects</a>

                        ${this.ContactsComponent.Layout()}
                    </div>
                </section>
            </aside>
        `);
    }
}

export default Sidebar;