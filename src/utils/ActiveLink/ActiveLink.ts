class ActiveLink {
    private current_pathName: string = window.location.pathname;

    public elementList: NodeListOf<HTMLAnchorElement>;
    public className: string = "";

    public constructor(elementList: NodeListOf<HTMLAnchorElement>, className: string) {
        this.elementList = elementList;
        this.className = className;

        Object.values(this.elementList).map((element: HTMLAnchorElement): void => {
            if (this.current_pathName === element.pathname) {
                element.classList.add(this.className);
            }
        });
    }
}


export default ActiveLink;