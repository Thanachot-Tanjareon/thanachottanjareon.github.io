class Logo {
    public logoText: string = "";

    public constructor(logoText: string) {
        this.logoText = logoText;

        return;
    }

    public Layout(): string {
        return (`
            <div class="logo --userSelect-none">
                <div class="logo__text">${this.logoText}</div>
            </div>
        `);
    }
}

export default Logo;