import { SPAInterface, Routes } from "./@SPAVanilla.interface";


class SPAVanilla implements SPAInterface {
    private Body: HTMLBodyElement = document.querySelector("body") as HTMLBodyElement;
    private Titile: HTMLTitleElement = document.querySelector("title") as HTMLTitleElement;

    public app!: HTMLElement;
    public routes!: Routes;
    public current_path: string = "";


    public constructor(routes?: Routes, app?: HTMLElement) {
        if (routes && app) {
            this.app = app;
            this.routes = routes;
        }

        this.SPALoading();
    }

    private SPALoading(): void {
        this.Body.addEventListener("click", (event: Event): void => {
            if (event.target instanceof HTMLAnchorElement) {
                if (event.target.nodeName === "A" && !event.target.href.match(/^https/)) {
                    event.preventDefault();
                    this.current_path = event.target.pathname;

                    
                    window.history.pushState(event.target.href, "", this.current_path);

                    this.SPARender(this.current_path);
                }
            }
        });

        window.addEventListener("load", (): void => {
            if (window.history.state !== null && window.history.state === window.location.href) {
                this.current_path = window.location.pathname;
                this.SPARender(this.current_path);
            } else {
                this.current_path = window.location.pathname;
                this.SPARender(this.current_path);
            }
        });
    }

    private SPARender(path: string): void {
        this.Titile.textContent = this.routes[path].title;
        this.app.innerHTML = this.routes[path].pageLayout;
    }

    public SPAFeatures(callbackObserve: MutationCallback): void {
        const observer = new MutationObserver(callbackObserve);

        if (typeof(callbackObserve) !== "function") {
            callbackObserve as Function;

            window.addEventListener("DOMContentLoaded", (): void => callbackObserve);
        }
        
        observer.observe(this.app, {
            "childList": true
        });

    }
}


export default SPAVanilla;