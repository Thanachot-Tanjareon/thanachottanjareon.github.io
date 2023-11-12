// component
import Logo from "./Logo";


class Navbar {
    private logoComponent = new Logo("T-TPortfolio");

    public constructor() {
        return;
    }

    public Layout(): string {
        return (`
            <nav class="navbar">
                <section class="navbar__container">
                    ${this.logoComponent.Layout()}
                    <span class="bi bi-list --userSelect-none --cursor-pointer"></span>
                </section>
            </nav>
        `);
    }
}

export default Navbar;