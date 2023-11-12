class TypingEffect {
    public constructor(shortQoute: string[], speedTyping: number, speedEraser: number) {
        let typingElement: HTMLElement = document.querySelector(".--typing-effect") as HTMLElement;
        let textIndex: number = 0;
        let chrIndex: number = 0;

        function typing() {
            if (textIndex === shortQoute.length) {
                textIndex = 0;
            }

            if (chrIndex < shortQoute[textIndex].length) {
                if (typingElement) {
                    typingElement.textContent += shortQoute[textIndex][chrIndex];
                }
                chrIndex += 1;

                setTimeout(typing, speedTyping);
            } else {
                setTimeout(eraser, speedEraser);
            }
        }

        function eraser() {
            if (typingElement) {
                if (chrIndex >= 0 && typingElement.textContent !== "") {
                    typingElement.textContent = shortQoute[textIndex].substring(0, chrIndex);
                    if (chrIndex === 0) {
                        typingElement.textContent = "";
                    } else {
                        chrIndex -= 1;
                    }
                    
                    setTimeout(eraser, speedEraser);
                } else {
                    textIndex += 1;
                    setTimeout(typing, speedTyping);
                }
            }
        }

        setTimeout(typing, speedTyping);
    }
}

export default TypingEffect;