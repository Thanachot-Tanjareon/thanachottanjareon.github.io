import { IntroInterface } from "../data/@myData.interface";
// components
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Skills from "../components/Skills";
import Footer from "../components/Footer";


class Home {
    private navbarComponent!: Navbar;
    private sidebarComponent!: Sidebar;
    private headerComponent!: Header;
    private aboutComponent!: About;
    private contactsComponent!: Contacts;
    private skillsComponent!: Skills;
    private footerComponent!: Footer;

    public copyright: object = {}
    public data: {[key: string]: any} = {}
    public qouteExplaination: string = "";
    public skills: {
        [skill_type: string]: {
            skill: string
            icon: string
    }[]} = {};

    public constructor(data: IntroInterface) {
        Object.keys(data).map((key: string): void => {
            if (key === "copyright") {
                this.copyright = data[key];
            } else if (key === "name" || key === "profileUrl" || key === "age" || key === "contacts") {
                this.data[key] = data[key];
            } else if (key === "qouteExplaination") {
                this.qouteExplaination = data[key];
            } else if (key === "skills") {
                this.skills = data[key];
            }
        });

        this.navbarComponent = new Navbar();
        this.sidebarComponent = new Sidebar(this.data);
        this.headerComponent = new Header();
        this.aboutComponent = new About(this.qouteExplaination);
        this.contactsComponent = new Contacts(this.data.contacts);
        this.skillsComponent = new Skills(this.skills);
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
                    <!-- about -->
                    ${this.aboutComponent.Layout()}
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

export default Home;