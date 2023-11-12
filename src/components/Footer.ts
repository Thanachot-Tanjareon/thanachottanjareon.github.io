class Footer {

    public owner: string = "";
    public copyrightMsg: string = "";

    public constructor(props: any) {
        this.owner = props.owner;
        this.copyrightMsg = props.copyright_text;
    }

    public Layout(): string {
        return (`
            <footer class="footer">
                <section class="footer__container">
                    <div class="copyright__wrapper">
                        <div class="copyright__icon bi bi-c-circle"></div>
                        <div class="copyright__info">
                            <p>${this.copyrightMsg}</p>
                            <p>${this.owner}</p>
                        </div>
                    </div>
                </section>
            </footer>
        `);
    }
}

export default Footer;