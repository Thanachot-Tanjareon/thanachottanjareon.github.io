import { IntroInterface } from "../data/@myData.interface";
// components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Project from "../components/Project";

class Projects {
    private navbarComponent!: Navbar;
    private sidebarComponent!: Sidebar;
    private headerComponent!: Header;
    private contactsComponent!: Contacts;
    private skillsComponent!: Skills;
    private footerComponent!: Footer;
    private projectComponent!: Project;

    public copyright: object = {}
    public data: {[key: string]: any} = {}
    public shortExplaination: string[] = [];
    public skills: {[skill__type: string]: {
        skill: string
        icon: string
    }[]} = {};
    public projects: {[project_type: string]: {
        project: string
        project_image: string
        tech_stack?: string[]
        tools: string[]
        url: string
        source_code_url?: string
    }[]} | null = null;

    public constructor(data: IntroInterface) {
        Object.keys(data).map((key: string): void => {
            if (key === "copyright") {
                this.copyright = data[key];
            } else if (key === "name" || key === "profileUrl" || key === "age" || key === "contacts") {
                this.data[key] = data[key];
            } else if (key === "skills") {
                this.skills = data[key];
            } else if (key === "projects") {
                this.projects = data[key];
            }
        });

        this.navbarComponent = new Navbar();
        this.sidebarComponent = new Sidebar(this.data);
        this.headerComponent = new Header();
        this.contactsComponent = new Contacts(this.data.contacts);
        this.skillsComponent = new Skills(this.skills);
        this.projectComponent = new Project(this.projects);
        this.footerComponent = new Footer(this.copyright);
    }

    public Layout(): string {
        return (`
        <!-- navbar -->
        ${this.navbarComponent.Layout()}
        <main class="container">
            <!-- sidebar -->
            ${this.sidebarComponent.Layout()}
            <!-- board -->
            <section class="board-container">
                <!-- header -->
                ${this.headerComponent.Layout()}
                <!-- project -->
                ${this.projectComponent.Layout()}
                <!-- skills -->
                ${this.skillsComponent.Layout()}
                <!-- contacts -->
                ${this.contactsComponent.Layout()}
            </section>
        </main>
        ${this.footerComponent.Layout()}
        `);
    }
}

export default Projects;