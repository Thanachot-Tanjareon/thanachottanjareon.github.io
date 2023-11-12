class About {
    public qouteExplaination!: string;

    public constructor(props: any) {
        this.qouteExplaination = props;
    }

    public Layout(): string {
        return (`
            <div class="about__wrapper">
                <h3 class="title">About</h3>
                <p class="info">${this.qouteExplaination}</p>
            </div>
        `);
    }
}

export default About;