class ToggleSliderSidebar {
    public element!: HTMLElement;
    public targetSlider!: HTMLElement;
    public classToggle: string = "";

    public constructor(element: HTMLElement, classToggle: string, targetSlider: HTMLElement) {
        this.element = element;
        this.targetSlider = targetSlider;
        this.classToggle = classToggle;

        this.element.addEventListener("click", () => {
            if (!this.targetSlider.classList.contains(this.classToggle)) {
                this.targetSlider.classList.remove("--display-none");

                setTimeout((): void => this.targetSlider.classList.add(this.classToggle), 100);
                
            } else {
                this.targetSlider.classList.remove(this.classToggle);

                setTimeout((): void => this.targetSlider.classList.add("--display-none"), 100);
            }
        });
    }
}

export default ToggleSliderSidebar;