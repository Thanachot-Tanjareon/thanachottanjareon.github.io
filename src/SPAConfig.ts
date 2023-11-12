import SPAVanilla from "./modules/SPAVanilla/SPAVanilla";
import { myIntro } from "./main";
import TypingEffect from "./utils/TypingEffect/TpyingEffect";
import ActiveLink from "./utils/ActiveLink/ActiveLink";
import ToggleSliderSidebar from "./utils/ToggleSliderSidebar/ToggleSliderSidebar";
// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";


const app: HTMLElement = document.querySelector("#app") as HTMLElement;

export const SPA = new SPAVanilla({
    "/thanachottanjareon.github.io/": {
        title: "Thanachot Tanjareon | Portfolio",
        pageLayout: new Home(myIntro).Layout()
    },
    "/thanachottanjareon.github.io/projects": {
        title: "Thanachot Tanjareon | Projects",
        pageLayout: new Projects(myIntro).Layout()
    }
}, app);

window.addEventListener("load", (): void => SPA.SPALoading());


const speedTyping: number = 145;
const speedEraser: number = 230;

SPA.SPAFeatures((): void => {
    const elementLinkPages: NodeListOf<HTMLAnchorElement> = document.querySelectorAll<HTMLAnchorElement>("a.link__menu");
    const sidebarOpenSlider: HTMLElement = document.querySelector<HTMLElement>("nav.navbar span") as HTMLElement;
    const sidebarClosedSlider: HTMLElement = document.querySelector<HTMLElement>("aside.sidebar .sidebar__container > span") as HTMLElement;
    const sidebar: HTMLElement = document.querySelector<HTMLElement>("aside.sidebar") as HTMLElement;

    new TypingEffect(myIntro.shortExplaination, speedTyping, speedEraser);
    new ActiveLink(elementLinkPages, "--active-link");
    new ToggleSliderSidebar(sidebarOpenSlider, "--sidebar-sliding", sidebar);
    new ToggleSliderSidebar(sidebarClosedSlider, "--sidebar-sliding", sidebar);
});