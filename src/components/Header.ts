class Header {
    public constructor() {
        return;
    }


    public Layout(): string {
        return (`
            <header class="header">
                <section class="header__container">
                    <h2 class="header__info">I'm <span class="--typing-effect"></span></h2>
                </section>
            </header>
        `);
    }
}

export default Header;